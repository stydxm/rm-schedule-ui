import { defineStore } from "pinia";
import { ScheduleData, MatchNode, ZoneNode, Player } from "../types/schedule";
import axios, { AxiosResponse } from "axios";
import { GroupRankInfo } from "../types/group_rank_info";
import { MpMatch, MpMatchRoot } from "../types/mp_match";
import { RobotDisplay, RobotData, Robot } from "../types/robot_data";
import { ro } from "vuetify/locale";

export interface Schedule {
  data: ScheduleData;
}

export const usePromotionStore = defineStore("promotion", {
  state: () => ({
    season: 0 as number,
    zoneId: 0 as number,
    schedule: {} as Schedule,
    groupRank: {} as GroupRankInfo,
    robotData: {} as RobotData,
    avgRobotData: [] as Robot[],
    maxRobotData: [] as Robot[],
    robotDisplayMap: new Map<string, RobotDisplay>(),
    avgRobotDisplay: {} as RobotDisplay,
    maxRobotDisplay: {
      heroKeyDamage: 0,
      engineerEco: 0,
      standardDamage: 0,
      aerialDamage: 0,
      sentryDamage: 0,
      dartHit: 0,
      radarDamage: 0,
    } as RobotDisplay,
    mpMatchMap: new Map<string, MpMatch>(),
    selectedPlayer: null as Player | null,
    suggestionEnabled: false as boolean,
  }),
  getters: {
    backgroundImageOpacity(state): number {
      switch (state.season) {
        case 2024:
          if (state.zoneId >= 524) {
            // 全国赛
            return 1.0;
          } else {
            // 区域赛
            return 0.5;
          }
        case 2025:
          return 0.5;
      }

      return 1.0;
    },
    backgroundImage(state): string {
      const isMobile = window.innerWidth < window.innerHeight;
      switch (state.season) {
        case 2024:
          if (state.zoneId >= 524) {
            // 全国赛
            return "/background/2024_final.png";
          } else {
            // 区域赛
            return "/background/2024_group.jpg";
          }
        case 2025:
          if (isMobile) return "/background/2025_group_mobile.png";
          else return "/background/2025_group.jpg";
      }

      return "/background/2024_final.png";
    },
  },
  actions: {
    async updateSchedule() {
      await axios({
        method: "GET",
        url: "/api/schedule",
        params: {
          season: this.season,
        },
      }).then(async (response: AxiosResponse<Schedule>) => {
        this.schedule = response.data;
      });
    },
    async updateGroupRank() {
      await axios({
        method: "GET",
        url: "/api/group_rank_info",
        params: {
          season: this.season,
        },
      }).then((response: AxiosResponse<any>) => {
        this.groupRank = response.data;
      });
    },
    async updateRobotData() {
      await axios({
        method: "GET",
        url: "/api/robot_data",
      }).then((response: AxiosResponse<any>) => {
        const newRobotData: RobotData = response.data;
        const newSumRobotData: Robot[] = [];
        const newMaxRobotData: Robot[] = [];
        const IgnoredKeys = ["id", "type", "robotNumber"] // 计算时忽略的键
        this.robotData = newRobotData;
        let teamCount = 0;
        let heroKeyDamageSum = 0;
        let engineerEcoSum = 0;
        let standardDamageSum = 0;
        let aerialDamageSum = 0;
        let sentryDamageSum = 0;
        let dartHitSum = 0;
        let radarDamageSum = 0;
        for (const zone of newRobotData.zones) {
          for (const team of zone.teams) {
            teamCount++;
            const currentTeamRobotDisplay: RobotDisplay = {
              heroKeyDamage: 0,
              engineerEco: 0,
              standardDamage: 0,
              aerialDamage: 0,
              sentryDamage: 0,
              dartHit: 0,
              radarDamage: 0,
            };
            for (const robot of team.robots) {
              robot.eaKDA = this.fixKDA(robot.eaKDA);
              newSumRobotData.find((r: Robot, index: number) => {
                if (r.type === robot.type) {
                  Object.keys(robot).filter(key => !IgnoredKeys.includes(key)).forEach(key => {
                    if (typeof robot[key] === "number") {
                      newSumRobotData[index][key] += robot[key];
                    }
                  })
                  return r;
                }
              }) || newSumRobotData.push({ ...robot });
              newMaxRobotData.find((r: Robot, index: number) => {
                if (r.type === robot.type) {
                  Object.keys(robot).filter(key => !IgnoredKeys.includes(key)).forEach(key => {
                    if (typeof robot[key] === "number") {
                      newMaxRobotData[index][key] = Math.max(
                        newMaxRobotData[index][key],
                        robot[key]
                      );
                    }
                  })
                  return r;
                }
              }) || newMaxRobotData.push({ ...robot });
              switch (robot.robotNumber) {
                case 1: {
                  const heroData = robot.gkDamage;
                  currentTeamRobotDisplay.heroKeyDamage = heroData;
                  heroKeyDamageSum += heroData;
                  this.maxRobotDisplay.heroKeyDamage = Math.max(
                    this.maxRobotDisplay.heroKeyDamage,
                    heroData
                  );
                  break;
                }
                case 2: {
                  const engineerData = robot.eaExchangeEcon;
                  currentTeamRobotDisplay.engineerEco = engineerData;
                  engineerEcoSum += engineerData;
                  this.maxRobotDisplay.engineerEco = Math.max(
                    this.maxRobotDisplay.engineerEco,
                    engineerData
                  );
                  break;
                }
                case 3: {
                  const standardData = robot.eagHurt;
                  currentTeamRobotDisplay.standardDamage = standardData;
                  standardDamageSum += standardData;
                  this.maxRobotDisplay.standardDamage = Math.max(
                    this.maxRobotDisplay.standardDamage,
                    standardData
                  );
                  break;
                }
                case 6: {
                  const aerialData = robot.eagHurt;
                  currentTeamRobotDisplay.aerialDamage = aerialData;
                  aerialDamageSum += aerialData;
                  this.maxRobotDisplay.aerialDamage = Math.max(
                    this.maxRobotDisplay.aerialDamage,
                    aerialData
                  );
                  break;
                }
                case 7: {
                  const sentryData = robot.eagHurt;
                  currentTeamRobotDisplay.sentryDamage = sentryData;
                  sentryDamageSum += sentryData;
                  this.maxRobotDisplay.sentryDamage = Math.max(
                    this.maxRobotDisplay.sentryDamage,
                    sentryData
                  );
                  break;
                }
                case 11: {
                  const radarData = robot.eaRadarDebuffDmg;
                  currentTeamRobotDisplay.radarDamage = radarData;
                  radarDamageSum += radarData;
                  this.maxRobotDisplay.radarDamage = Math.max(
                    this.maxRobotDisplay.radarDamage,
                    radarData
                  );
                  break;
                }
                case 10: {
                  const dartData =
                    robot.etDartOutpostCnt +
                    robot.etDartFixedCnt +
                    robot.etDartRDFixCnt +
                    robot.etDartRDMoveCnt;
                  currentTeamRobotDisplay.dartHit = dartData;
                  dartHitSum += dartData;
                  this.maxRobotDisplay.dartHit = Math.max(
                    this.maxRobotDisplay.dartHit,
                    dartData
                  );
                  break;
                }
              }
            }
            this.robotDisplayMap.set(team.collegeName, currentTeamRobotDisplay);
          }
        }
        const newAvgRobotData: Robot[] = [];
        newSumRobotData.forEach((r: Robot) => {
          const avgRobot: Robot = {
            id: r.id,
            type: r.type,
            robotNumber: r.robotNumber,
          } as Robot;
          Object.keys(r).filter(key => !IgnoredKeys.includes(key)).forEach(key => {
            if (typeof r[key] === "number") {
              avgRobot[key] = Math.round((100 * r[key]) / teamCount) / 100;
            } else {
              avgRobot[key] = r[key];
            }
          })
          newAvgRobotData.push(avgRobot);
        })
        this.avgRobotData = newAvgRobotData;
        this.maxRobotData = newMaxRobotData;
        this.avgRobotDisplay = {
          heroKeyDamage: Math.round((100 * heroKeyDamageSum) / teamCount) / 100,
          engineerEco: Math.round((100 * engineerEcoSum) / teamCount) / 100,
          standardDamage:
            Math.round((100 * standardDamageSum) / teamCount) / 100,
          aerialDamage: Math.round((100 * aerialDamageSum) / teamCount) / 100,
          sentryDamage: Math.round((100 * sentryDamageSum) / teamCount) / 100,
          dartHit: Math.round((100 * dartHitSum) / teamCount) / 100,
          radarDamage: Math.round((100 * radarDamageSum) / teamCount) / 100,
        } as RobotDisplay;
      });
    },
    async updateMpMatch(matchIds: number[]) {
      if (matchIds.length === 0) return;
      axios({
        method: "GET",
        url: "/api/mp/match",
        params: {
          season: this.season,
          match_ids: matchIds.join(","),
        },
      }).then((res: AxiosResponse<MpMatchRoot>) => {
        res.data.list.forEach((match: MpMatch) => {
          this.mpMatchMap.set(match.matchId.toString(), match);
        });
      });
    },
    getZone(zoneId: number): ZoneNode {
      return this.schedule.data.event.zones.nodes.find(
        (zone: ZoneNode) => zone.id == zoneId.toString()
      );
    },
    getMatchByOrder(
      zoneId: number,
      orderNumber: number,
      planGameCount: number = 3
    ): MatchNode | undefined {
      const zone = this.getZone(zoneId);
      let node = zone.groupMatches.nodes.find(
        (match: MatchNode) =>
          match.orderNumber == orderNumber &&
          match.planGameCount == planGameCount
      );
      if (node) return node;
      node = zone.knockoutMatches.nodes.find(
        (match: MatchNode) => match.orderNumber == orderNumber
      );
      if (node) return node;
      return undefined;
    },
    getMpMatch(matchId: string): MpMatch {
      return this.mpMatchMap.get(matchId) as MpMatch;
    },
    fixKDA(kda: string): string {
      const [kills, deaths, assists] = kda.split('/').map(part =>
        Number(parseFloat(part).toFixed(1))
      );
      return `${kills}/${deaths}/${assists}`;
    }
  },
});
