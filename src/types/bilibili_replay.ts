export interface BilibiliReplay {
  aid: number
  bvid: string
  ctime: number
  enable_vt: boolean
  interactive_video: boolean
  pic: string
  pubdate: number
  stat: Stat
  title: string
}

export interface Stat {
  view: number
  vt: number
}
