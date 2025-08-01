import { RoundOrder } from "../types/round_order";
import {
  GetGroupZoneKnockoutJsonData,
  GroupZoneGroup1JsonData,
  GroupZoneGroup1RoundOrder,
  GroupZoneGroup2JsonData,
  GroupZoneGroup2RoundOrder,
  GroupZoneGroupJsonData,
  GroupZoneKnockoutTitleData,
  GroupZoneRoundOrder,
  QuotaCompetition_11_5_JsonData, QuotaCompetition_8_6_JsonData, QuotaCompetition_9_5_JsonData,
} from "./group_zone";
import {
  GlobalZoneJsonData, GlobalZoneRoundOrder,
  RevivalZoneGroupJsonData,
  RevivalZoneRoundOrder
} from "./revival_zone";
import { GroupType, TitleData, ImageData, ZoneJsonData } from "../types/zone";
import {
  RevivalZone2GroupJsonData,
  RevivalZone2GroupJsonData2025,
  RevivalZone2ImageData, RevivalZone2ImageData2025,
  RevivalZone2RoundOrder, RevivalZone2RoundOrder2025
} from "./revival_zone2";
import {
  FinalZoneGroup1JsonData, FinalZoneGroup1JsonData2025,
  FinalZoneGroup1RoundOrder, FinalZoneGroup1RoundOrder2025,
  FinalZoneGroup2JsonData, FinalZoneGroup2JsonData2025,
  FinalZoneGroup2RoundOrder, FinalZoneGroup2RoundOrder2025
} from "./final_zone_group";
import {
  FinalZoneKnockoutJsonData, FinalZoneKnockoutJsonData2025,
  FinalZoneKnockoutLoserJsonData, FinalZoneKnockoutLoserJsonData2025,
  FinalZoneKnockoutLoserTitleData, FinalZoneKnockoutLoserTitleData2025,
  FinalZoneKnockoutTitleData, FinalZoneKnockoutTitleData2025
} from "./final_zone_knockout";

export interface Part {
  name: string,
  type: 'group' | 'knockout',
  group: GroupType,
  jsonData: ZoneJsonData,
  roundOrder?: RoundOrder,
  extraTitleData?: TitleData[],
  extraImageData?: ImageData[],
}

export interface Zone {
  id: number,
  name: string,
  disabled: boolean,
  parts: Part[],
}

export const SeasonList = [2024, 2025];

export const DefaultZoneMap = {
  2024: 526,
  2025: 567,
}

export const ZoneMap: { [key: number]: Zone[] } = {
  2024: [
    {
      id: 498, name: '东部赛区', disabled: false,
      parts: [
        {
          name: 'A组',
          type: 'group',
          group: 'A',
          jsonData: GroupZoneGroupJsonData,
          roundOrder: GroupZoneRoundOrder
        },
        {
          name: 'B组',
          type: 'group',
          group: 'B',
          jsonData: GroupZoneGroupJsonData,
          roundOrder: GroupZoneRoundOrder
        },
        {
          name: '淘汰赛',
          type: 'knockout',
          group: 'Knockout',
          jsonData: GetGroupZoneKnockoutJsonData(498),
          extraTitleData: GroupZoneKnockoutTitleData,
          roundOrder: GroupZoneRoundOrder
        }
      ]
    },
    {
      id: 499, name: '中部赛区', disabled: false,
      parts: [
        {
          name: 'A组',
          type: 'group',
          group: 'A',
          jsonData: GroupZoneGroupJsonData,
          roundOrder: GroupZoneRoundOrder
        },
        {
          name: 'B组',
          type: 'group',
          group: 'B',
          jsonData: GroupZoneGroupJsonData,
          roundOrder: GroupZoneRoundOrder
        },
        {
          name: '淘汰赛',
          type: 'knockout',
          group: 'Knockout',
          jsonData: GetGroupZoneKnockoutJsonData(499),
          extraTitleData: GroupZoneKnockoutTitleData,
          roundOrder: GroupZoneRoundOrder
        }
      ]
    },
    {
      id: 500, name: '南部赛区', disabled: false,
      parts: [
        {
          name: 'A组',
          type: 'group',
          group: 'A',
          jsonData: GroupZoneGroupJsonData,
          roundOrder: GroupZoneRoundOrder
        },
        {
          name: 'B组',
          type: 'group',
          group: 'B',
          jsonData: GroupZoneGroupJsonData,
          roundOrder: GroupZoneRoundOrder
        },
        {
          name: '淘汰赛',
          type: 'knockout',
          group: 'Knockout',
          jsonData: GetGroupZoneKnockoutJsonData(500),
          extraTitleData: GroupZoneKnockoutTitleData,
          roundOrder: GroupZoneRoundOrder
        }
      ]
    },
    {
      id: 524, name: '国际赛区&复活赛第一赛段', disabled: false,
      parts: [
        {
          name: 'A组',
          type: 'group',
          group: 'A',
          jsonData: RevivalZoneGroupJsonData,
          roundOrder: RevivalZoneRoundOrder
        },
        {
          name: 'B组',
          type: 'group',
          group: 'B',
          jsonData: RevivalZoneGroupJsonData,
          roundOrder: RevivalZoneRoundOrder
        },
        {
          name: '港澳台及海外赛区',
          type: 'group',
          group: 'QW',
          jsonData: GlobalZoneJsonData,
          extraTitleData: null,
          roundOrder: GlobalZoneRoundOrder,
        }
      ]
    },
    {
      id: 525, name: '复活赛第二赛段', disabled: false,
      parts: [
        {
          name: 'C组',
          type: 'group',
          group: 'C',
          jsonData: RevivalZone2GroupJsonData,
          roundOrder: RevivalZone2RoundOrder,
          extraImageData: RevivalZone2ImageData,
        },
      ]
    },
    {
      id: 526, name: '全国赛', disabled: false,
      parts: [
        {
          name: 'A组前段',
          type: 'group',
          group: 'A',
          jsonData: FinalZoneGroup1JsonData,
          roundOrder: FinalZoneGroup1RoundOrder,
        },
        {
          name: 'B组前段',
          type: 'group',
          group: 'B',
          jsonData: FinalZoneGroup1JsonData,
          roundOrder: FinalZoneGroup1RoundOrder,
        },
        {
          name: 'A组后段',
          type: 'group',
          group: 'A',
          jsonData: FinalZoneGroup2JsonData,
          roundOrder: FinalZoneGroup2RoundOrder,
        },
        {
          name: 'B组后段',
          type: 'group',
          group: 'B',
          jsonData: FinalZoneGroup2JsonData,
          roundOrder: FinalZoneGroup2RoundOrder
        },
        {
          name: '淘汰赛败者组',
          type: 'knockout',
          group: 'Knockout',
          jsonData: FinalZoneKnockoutLoserJsonData,
          extraTitleData: FinalZoneKnockoutLoserTitleData,
        },
        {
          name: '淘汰赛胜者组',
          type: 'knockout',
          group: 'Knockout',
          jsonData: FinalZoneKnockoutJsonData,
          extraTitleData: FinalZoneKnockoutTitleData,
        },
      ]
    },
  ],
  2025: [
    {
      id: 565, name: '南部赛区', disabled: false,
      parts: [
        {
          name: 'A组前段',
          type: 'group',
          group: 'A',
          jsonData: GroupZoneGroup1JsonData,
          roundOrder: GroupZoneGroup1RoundOrder,
        },
        {
          name: 'B组前段',
          type: 'group',
          group: 'B',
          jsonData: GroupZoneGroup1JsonData,
          roundOrder: GroupZoneGroup1RoundOrder,
        },
        {
          name: 'A组后段',
          type: 'group',
          group: 'A',
          jsonData: GroupZoneGroup2JsonData,
          roundOrder: GroupZoneGroup2RoundOrder,
        },
        {
          name: 'B组后段',
          type: 'group',
          group: 'B',
          jsonData: GroupZoneGroup2JsonData,
          roundOrder: GroupZoneGroup2RoundOrder,
        },
        {
          name: '全国赛名额争夺战',
          type: 'group',
          group: 'Knockout',
          jsonData: QuotaCompetition_11_5_JsonData,
          roundOrder: GroupZoneRoundOrder
        },
        {
          name: '淘汰赛',
          type: 'knockout',
          group: 'Knockout',
          jsonData: GetGroupZoneKnockoutJsonData(565),
          extraTitleData: GroupZoneKnockoutTitleData,
          roundOrder: GroupZoneRoundOrder
        }
      ]
    },
    {
      id: 566, name: '中部赛区', disabled: false,
      parts: [
        {
          name: 'A组前段',
          type: 'group',
          group: 'A',
          jsonData: GroupZoneGroup1JsonData,
          roundOrder: GroupZoneGroup1RoundOrder,
        },
        {
          name: 'B组前段',
          type: 'group',
          group: 'B',
          jsonData: GroupZoneGroup1JsonData,
          roundOrder: GroupZoneGroup1RoundOrder,
        },
        {
          name: 'A组后段',
          type: 'group',
          group: 'A',
          jsonData: GroupZoneGroup2JsonData,
          roundOrder: GroupZoneGroup2RoundOrder,
        },
        {
          name: 'B组后段',
          type: 'group',
          group: 'B',
          jsonData: GroupZoneGroup2JsonData,
          roundOrder: GroupZoneGroup2RoundOrder,
        },
        {
          name: '复活赛名额争夺战',
          type: 'group',
          group: 'Knockout',
          jsonData: QuotaCompetition_8_6_JsonData,
          roundOrder: GroupZoneRoundOrder
        },
        {
          name: '淘汰赛',
          type: 'knockout',
          group: 'Knockout',
          jsonData: GetGroupZoneKnockoutJsonData(566),
          extraTitleData: GroupZoneKnockoutTitleData,
          roundOrder: GroupZoneRoundOrder
        }
      ]
    },
    {
      id: 567, name: '东部赛区', disabled: false,
      parts: [
        {
          name: 'A组前段',
          type: 'group',
          group: 'A',
          jsonData: GroupZoneGroup1JsonData,
          roundOrder: GroupZoneGroup1RoundOrder,
        },
        {
          name: 'B组前段',
          type: 'group',
          group: 'B',
          jsonData: GroupZoneGroup1JsonData,
          roundOrder: GroupZoneGroup1RoundOrder,
        },
        {
          name: 'A组后段',
          type: 'group',
          group: 'A',
          jsonData: GroupZoneGroup2JsonData,
          roundOrder: GroupZoneGroup2RoundOrder,
        },
        {
          name: 'B组后段',
          type: 'group',
          group: 'B',
          jsonData: GroupZoneGroup2JsonData,
          roundOrder: GroupZoneGroup2RoundOrder,
        },
        {
          name: '全国赛名额争夺战',
          type: 'group',
          group: 'Knockout',
          jsonData: QuotaCompetition_9_5_JsonData,
          roundOrder: GroupZoneRoundOrder
        },
        {
          name: '淘汰赛',
          type: 'knockout',
          group: 'Knockout',
          jsonData: GetGroupZoneKnockoutJsonData(567),
          extraTitleData: GroupZoneKnockoutTitleData,
          roundOrder: GroupZoneRoundOrder
        }
      ]
    },
    {
      id: 570, name: '复活赛第一赛段', disabled: false,
      parts: [
        {
          name: 'A组',
          type: 'group',
          group: 'A',
          jsonData: RevivalZoneGroupJsonData,
          roundOrder: RevivalZoneRoundOrder
        },
        {
          name: 'B组',
          type: 'group',
          group: 'B',
          jsonData: RevivalZoneGroupJsonData,
          roundOrder: RevivalZoneRoundOrder
        }
      ]
    },
    {
      id: 571, name: '复活赛第二赛段', disabled: false,
      parts: [
        {
          name: 'C组',
          type: 'group',
          group: 'C',
          jsonData: RevivalZone2GroupJsonData2025,
          roundOrder: RevivalZone2RoundOrder2025,
          extraImageData: RevivalZone2ImageData2025,
        },
      ]
    },
    {
      id: 572, name: '全国赛', disabled: false,
      parts: [
        {
          name: 'A组前段',
          type: 'group',
          group: 'A',
          jsonData: FinalZoneGroup1JsonData2025,
          roundOrder: FinalZoneGroup1RoundOrder2025,
        },
        {
          name: 'B组前段',
          type: 'group',
          group: 'B',
          jsonData: FinalZoneGroup1JsonData2025,
          roundOrder: FinalZoneGroup1RoundOrder2025,
        },
        {
          name: 'A组后段',
          type: 'group',
          group: 'A',
          jsonData: FinalZoneGroup2JsonData2025,
          roundOrder: FinalZoneGroup2RoundOrder2025,
        },
        {
          name: 'B组后段',
          type: 'group',
          group: 'B',
          jsonData: FinalZoneGroup2JsonData2025,
          roundOrder: FinalZoneGroup2RoundOrder2025
        },
        {
          name: '淘汰赛败者组',
          type: 'knockout',
          group: 'Knockout',
          jsonData: FinalZoneKnockoutLoserJsonData2025,
          extraTitleData: FinalZoneKnockoutLoserTitleData2025,
        },
        {
          name: '淘汰赛胜者组',
          type: 'knockout',
          group: 'Knockout',
          jsonData: FinalZoneKnockoutJsonData2025,
          extraTitleData: FinalZoneKnockoutTitleData2025,
        },
      ]
    },
  ]
}
