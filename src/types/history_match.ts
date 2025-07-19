export interface HistoryMatchResp {
  hits: HistoryMatch[]
  total: number
}

export interface HistoryMatch {
  blueCollegeName: string
  blueSideWinGameCount: number
  blueTeamName: string
  group: string
  order: number
  orderNumber: number
  redCollegeName: string
  redSideWinGameCount: number
  redTeamName: string
  season: number
  zone: string
}
