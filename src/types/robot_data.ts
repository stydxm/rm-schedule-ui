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
    eaSmallHitRate: number //局均小弹丸命中率(%)
    eagHurt: number //局均总伤害
    eaKDA: string
    eagKdaScore: number
    gkDamage: number //局均关键伤害
    gKillCount: number //疑似局均击杀数，但某些数据中会略小于KDA中的击杀数
    eaBigHitRate: number //局均大弹丸命中率(%)
    eaSnipeCnt: number //局均部署命中数
    etDartOutpostCnt: number //累计前哨镖
    etDartFixedCnt: number //累计基地镖
    etDartRDFixCnt: number //累计随机固定靶
    etDartRDMoveCnt: number //累计随机移动靶
    eaRadarMarkerTime: number //局均易伤时间
    eaRadarDebuffDmg: number //局均额外伤害
    eaExchangeEcon: number //局均兑换经济
    avgMineTime: number //局均兑换时间
    avgMineDiff: number //局均兑换难度
}

export interface RobotDisplay {
    heroKeyDamage: number
    engineerEco: number
    standardDamage: number
    aerialDamage: number
    sentryDamage: number
    dartHit: number
    radarDamage: number
}