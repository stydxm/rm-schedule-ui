import { defineStore } from 'pinia'
import { ScheduleData, MatchNode, ZoneNode, Player, PlayerWithMatch } from "../types/schedule";
import axios, { AxiosResponse } from "axios";
import { GroupPlayer, GroupRankInfo, GroupRankInfoZone } from "../types/group_rank_info";
import { MpMatch, MpMatchRoot } from "../types/mp_match";
import { is } from "@babel/types";
import { Robot, RobotDisplay, RobotData } from '../types/robot_data';

export interface Schedule {
  data: ScheduleData
}

export const usePromotionStore = defineStore('promotion', {
  state: () => ({
    season: 0 as number,
    zoneId: 0 as number,
    schedule: {} as Schedule,
    groupRank: {} as GroupRankInfo,
    robotData: {} as RobotData,
    robotDataMap: new Map<string, RobotDisplay>(),
    avgRobotData: {} as RobotDisplay,
    maxRobotData: {
      heroKeyDamage: 0,
      engineerEco: 0,
      standardDamage: 0,
      aerialDamage: 0,
      sentryDamage: 0,
      dartHit: 0,
      radarDamage: 0
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
            return 1.0
          } else {
            // 区域赛
            return 0.5
          }
        case 2025:
          return 0.5
      }

      return 1.0
    },
    backgroundImage(state): string {
      const isMobile = window.innerWidth < window.innerHeight;
      switch (state.season) {
        case 2024:
          if (state.zoneId >= 524) {
            // 全国赛
            return "/background/2024_final.png"
          } else {
            // 区域赛
            return "/background/2024_group.jpg"
          }
        case 2025:
          if (isMobile) return "/background/2025_group_mobile.png"
          else return "/background/2025_group.jpg"
      }

      return "/background/2024_final.png"
    }
  },
  actions: {
    async updateSchedule() {
      await axios({
        method: 'GET',
        url: '/api/schedule',
        params: {
          season: this.season,
        }
      }).then(async (response: AxiosResponse<Schedule>) => {
        this.schedule = response.data
      })
    },
    async updateGroupRank() {
      await axios({
        method: 'GET',
        url: '/api/group_rank_info',
        params: {
          season: this.season,
        }
      }).then((response: AxiosResponse<any>) => {
        this.groupRank = response.data
      })
    },
    async updateRobotData() {
      await axios({
        method: 'GET',
        url: '/api/robot_data'
      }).then((response: AxiosResponse<any>) => {
        const newRobotData: RobotData = response.data
        this.robotData = newRobotData
        let teamCount = 0
        let heroKeyDamageSum = 0
        let engineerEcoSum = 0
        let standardDamageSum = 0
        let aerialDamageSum = 0
        let sentryDamageSum = 0
        let dartHitSum = 0
        let radarDamageSum = 0
        for (const zone of newRobotData.zones) {
          for (const team of zone.teams) {
            teamCount++
            let currentTeamRobotData: RobotDisplay = {
              heroKeyDamage: 0,
              engineerEco: 0,
              standardDamage: 0,
              aerialDamage: 0,
              sentryDamage: 0,
              dartHit: 0,
              radarDamage: 0
            }
            for (const robot of team.robots) {
              switch (robot.robotNumber) {
                case 1: {
                  const heroData = robot.gkDamage
                  currentTeamRobotData.heroKeyDamage = heroData
                  heroKeyDamageSum += heroData
                  this.maxRobotData.heroKeyDamage = Math.max(this.maxRobotData.heroKeyDamage, heroData)
                  break
                }
                case 2: {
                  const engineerData = robot.eaExchangeEcon
                  currentTeamRobotData.engineerEco = engineerData
                  engineerEcoSum += engineerData
                  this.maxRobotData.engineerEco = Math.max(this.maxRobotData.engineerEco, engineerData)
                  break
                }
                case 3: {
                  const standardData = robot.eagHurt
                  currentTeamRobotData.standardDamage = standardData
                  standardDamageSum += standardData
                  this.maxRobotData.standardDamage = Math.max(this.maxRobotData.standardDamage, standardData)
                  break
                }
                case 6: {
                  const aerialData = robot.eagHurt
                  currentTeamRobotData.aerialDamage = aerialData
                  aerialDamageSum += aerialData
                  this.maxRobotData.aerialDamage = Math.max(this.maxRobotData.aerialDamage, aerialData)
                  break
                }
                case 7: {
                  const sentryData = robot.eagHurt
                  currentTeamRobotData.sentryDamage = sentryData
                  sentryDamageSum += sentryData
                  this.maxRobotData.sentryDamage = Math.max(this.maxRobotData.sentryDamage, sentryData)
                  break
                }
                case 11: {
                  const radarData = robot.eaRadarDebuffDmg
                  currentTeamRobotData.radarDamage = radarData
                  radarDamageSum += radarData
                  this.maxRobotData.radarDamage = Math.max(this.maxRobotData.radarDamage, radarData)
                  break
                }
                case 10: {
                  let dartData = robot.etDartOutpostCnt + robot.etDartFixedCnt + robot.etDartRDFixCnt + robot.etDartRDMoveCnt
                  currentTeamRobotData.dartHit = dartData
                  dartHitSum += dartData
                  this.maxRobotData.dartHit = Math.max(this.maxRobotData.dartHit, dartData)
                  break
                }
              }
            }
            this.robotDataMap.set(team.collegeName, currentTeamRobotData)
          }
        }
        this.avgRobotData = {
          heroKeyDamage: Math.round(100 * heroKeyDamageSum / teamCount) / 100,
          engineerEco: Math.round(100 * engineerEcoSum / teamCount) / 100,
          standardDamage: Math.round(100 * standardDamageSum / teamCount) / 100,
          aerialDamage: Math.round(100 * aerialDamageSum / teamCount) / 100,
          sentryDamage: Math.round(100 * sentryDamageSum / teamCount) / 100,
          dartHit: Math.round(100 * dartHitSum / teamCount) / 100,
          radarDamage: Math.round(100 * radarDamageSum / teamCount) / 100
        } as RobotDisplay
      })
    },
    async updateMpMatch(matchIds: number[]) {
      axios({
        method: 'GET',
        url: '/api/mp/match',
        params: {
          season: this.season,
          match_ids: matchIds.join(',')
        }
      }).then((res: AxiosResponse<MpMatchRoot>) => {
        res.data.list.forEach((match: MpMatch) => {
          this.mpMatchMap.set(match.matchId.toString(), match)
        })
      })
    },
    getZone(zoneId: number): ZoneNode {
      return this.schedule.data.event.zones.nodes.find((zone: ZoneNode) => zone.id == zoneId.toString())
    },
    getMatchByOrder(zoneId: number, orderNumber: number, planGameCount: number = 3): MatchNode | undefined {
      const zone = this.getZone(zoneId)
      let node = zone.groupMatches.nodes.find((match: MatchNode) => match.orderNumber == orderNumber && match.planGameCount == planGameCount)
      if (node) return node
      node = zone.knockoutMatches.nodes.find((match: MatchNode) => match.orderNumber == orderNumber)
      if (node) return node
      return undefined
    },
    getMpMatch(matchId: string): MpMatch {
      return this.mpMatchMap.get(matchId) as MpMatch
    },
  },
})

