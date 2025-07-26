export interface RobotData {
  zones: RobotDataZone[]
}

export interface RobotDataZone {
  zoneName: string
  zoneId: string
  teams: Team[]
}

export interface Team {
  id: number
  collegeName: string
  collegeLogo: string
  robots: Robot[]
}

export interface Robot {
  id: number
  type: string //Infactry|Hero|Sapper|Airplane|Guard|Dart|Radar
  robotNumber: number //1|2|3|6|7|10|11
  eaSmallHitRate: number //局均17mm弹丸命中率(%)
  eagHurt: number //局均总伤害
  eaKDA: string
  _eaKDAScore: number // (K + A) / max(D, 1)
  eagKdaScore: number
  gkDamage: number //局均关键伤害
  gKillCount: number //疑似局均击杀数，但某些数据中会略小于KDA中的击杀数
  eaBigHitRate: number //局均42mm弹丸命中率(%)
  eaSnipeCnt: number //局均部署命中数
  etDartOutpostCnt: number //累计命中前哨站数
  etDartFixedCnt: number //累计命中基地固定目标数
  etDartRDFixCnt: number //累计命中基地随机固定目标数
  etDartRDMoveCnt: number //累计命中基地随机移动目标数
  _etDartCnt: number //累计命中数
  _etDartWeightedScore: number //累计加权命中分数
  eaRadarMarkerTime: number //局均易伤时间
  eaRadarDebuffDmg: number //局均额外伤害
  eaExchangeEcon: number //局均兑换经济
  avgMineTime: number //局均兑换时间
  _reciprocalOfAvgMineTime: number //局均兑换时间倒数
  avgMineDiff: number //局均兑换难度
  avgShootNum: number //局均发弹量
  matchLargeEnergyActRoundsAvg: number // 大能量机关平均激活环数
}

export interface RobotDisplay {
  heroKeyDamage: number
  heroBigHitRate: number
  heroSnipeCnt: number
  engineerEco: number
  standardDamage: number
  aerialDamage: number
  sentryDamage: number
  dartWeightedScore: number // 飞镖加权命中分数
  radarMarkDuration: number
}
