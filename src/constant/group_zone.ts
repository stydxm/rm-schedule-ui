import { TitleData, ZoneJsonData } from "../types/zone";

const rx = 0;
const ry = 30;

const groupXOffset = 435;

export const GroupZoneGroup1JsonData: ZoneJsonData = {
  rootId: '#1',
  nodes: [
    {
      id: '#1',
      text: '第一轮 0-0',
      x: rx - 4 * groupXOffset,
      y: ry - 200,
      data: {
        title: '瑞士轮第一轮 0-0',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: 1,
        type: 'match',
        zones: [
          {
            matches: [1, 2, 3, 4, 5, 6, 7, 8],
            winners: [],
            losers: [],
            text: ['A1', 'A9', 'A2', 'A10', 'A11', 'A3', 'A12', 'A4', 'A5', 'A13', 'A6', 'A14', 'A15', 'A7', 'A16', 'A8']
          },
          {
            matches: [9, 10, 11, 12, 13, 14, 15, 16],
            winners: [],
            losers: [],
            text: ['B9', 'B1', 'B10', 'B2', 'B3', 'B11', 'B4', 'B12', 'B13', 'B5', 'B14', 'B6', 'B7', 'B15', 'B8', 'B16']
          }
        ]
      }
    },
    {
      id: '#2',
      text: '第二轮 1-0',
      x: rx - 3 * groupXOffset,
      y: ry - 260,
      data: {
        title: '瑞士轮第二轮 1-0',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: 2,
        type: 'match',
        zones: [
          {
            matches: [17, 18, 19, 20],
            winners: [1, 2, 3, 4, 5, 6, 7, 8],
            losers: [],
            text: ['A组 第一轮 第1名', 'A组 第一轮 第2名', 'A组 第一轮 第3名', 'A组 第一轮 第4名',
              'A组 第一轮 第6名', 'A组 第一轮 第5名', 'A组 第一轮 第8名', 'A组 第一轮 第7名'],
            forecasts: [
              { red: 1, blue: 2 },
              { red: 3, blue: 4 },
              { red: 6, blue: 5 },
              { red: 8, blue: 7 },
            ]
          },
          {
            matches: [25, 26, 27, 28],
            winners: [9, 10, 11, 12, 13, 14, 15, 16],
            losers: [],
            text: ['B组 第一轮 第2名', 'B组 第一轮 第1名', 'B组 第一轮 第4名', 'B组 第一轮 第3名',
              'B组 第一轮 第5名', 'B组 第一轮 第6名', 'B组 第一轮 第7名', 'B组 第一轮 第8名'],
            forecasts: [
              { red: 2, blue: 1 },
              { red: 4, blue: 3 },
              { red: 5, blue: 6 },
              { red: 7, blue: 8 },
            ]
          }
        ]
      }
    },
    {
      id: '#3',
      text: '第二轮 0-1',
      x: rx - 3 * groupXOffset,
      y: ry + 180,
      data: {
        title: '瑞士轮第二轮 0-1',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: 2,
        type: 'match',
        zones: [
          {
            matches: [21, 22, 23, 24],
            winners: [],
            losers: [1, 2, 3, 4, 5, 6, 7, 8],
            text: ['A组 第一轮 第9名', 'A组 第一轮 第10名', 'A组 第一轮 第11名', 'A组 第一轮 第12名',
              'A组 第一轮 第14名', 'A组 第一轮 第13名', 'A组 第一轮 第16名', 'A组 第一轮 第15名'],
            forecasts: [
              { red: 9, blue: 10 },
              { red: 11, blue: 12 },
              { red: 14, blue: 13 },
              { red: 16, blue: 15 },
            ]
          },
          {
            matches: [29, 30, 31, 32],
            winners: [],
            losers: [9, 10, 11, 12, 13, 14, 15, 16],
            text: ['B组 第一轮 第10名', 'B组 第一轮 第9名', 'B组 第一轮 第12名', 'B组 第一轮 第11名',
              'B组 第一轮 第13名', 'B组 第一轮 第14名', 'B组 第一轮 第15名', 'B组 第一轮 第16名'],
            forecasts: [
              { red: 10, blue: 9 },
              { red: 12, blue: 11 },
              { red: 13, blue: 14 },
              { red: 15, blue: 16 },
            ]
          }
        ]
      }
    },
    {
      id: '#4',
      text: '第三轮 2-0',
      x: rx - 2 * groupXOffset,
      y: ry - 300,
      data: {
        title: '瑞士轮第三轮 2-0',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: 3,
        type: 'match',
        zones: [
          {
            matches: [33, 34],
            winners: [17, 18, 19, 20],
            losers: [],
            text: ['A组 第二轮 第1名', 'A组 第二轮 第2名', 'A组 第二轮 第3名', 'A组 第二轮 第4名'],
            forecasts: [
              { red: 1, blue: 2 },
              { red: 3, blue: 4 },
            ]
          },
          {
            matches: [41, 42],
            winners: [25, 26, 27, 28],
            losers: [],
            text: ['B组 第二轮 第2名', 'B组 第二轮 第1名', 'B组 第二轮 第4名', 'B组 第二轮 第3名'],
            forecasts: [
              { red: 2, blue: 1 },
              { red: 4, blue: 3 },
            ]
          }
        ]
      }
    },
    {
      id: '#5',
      text: '第三轮 1-1',
      x: rx - 2 * groupXOffset,
      y: ry - 40,
      data: {
        title: '瑞士轮第三轮 1-1',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: 3,
        type: 'match',
        zones: [
          {
            matches: [35, 36, 37, 38],
            winners: [21, 22, 23, 24],
            losers: [17, 18, 19, 20],
            text: ['A组 第二轮 第6名', 'A组 第二轮 第5名', 'A组 第二轮 第8名', 'A组 第二轮 第7名',
              'A组 第二轮 第9名', 'A组 第二轮 第10名', 'A组 第二轮 第11名', 'A组 第二轮 第12名'],
            forecasts: [
              { red: 6, blue: 5 },
              { red: 8, blue: 7 },
              { red: 9, blue: 10 },
              { red: 11, blue: 12 },
            ]
          },
          {
            matches: [43, 44, 45, 46],
            winners: [29, 30, 31, 32],
            losers: [25, 26, 27, 28],
            text: ['B组 第二轮 第5名', 'B组 第二轮 第6名', 'B组 第二轮 第7名', 'B组 第二轮 第8名',
              'B组 第二轮 第10名', 'B组 第二轮 第9名', 'B组 第二轮 第12名', 'B组 第二轮 第11名'],
            forecasts: [
              { red: 5, blue: 6 },
              { red: 7, blue: 8 },
              { red: 10, blue: 9 },
              { red: 12, blue: 11 },
            ]
          }
        ]
      }
    },
    {
      id: '#6',
      text: '第三轮 0-2',
      x: rx - 2 * groupXOffset,
      y: ry + 395,
      data: {
        title: '瑞士轮第三轮 0-2',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: 3,
        type: 'match',
        zones: [
          {
            matches: [39, 40],
            winners: [],
            losers: [21, 22, 23, 24],
            text: ['A组 第二轮 第14名', 'A组 第二轮 第13名', 'A组 第二轮 第16名', 'A组 第二轮 第15名'],
            forecasts: [
              { red: 14, blue: 13 },
              { red: 16, blue: 15 },
            ]
          },
          {
            matches: [47, 48],
            winners: [],
            losers: [29, 30, 31, 32],
            text: ['B组 第二轮 第13名', 'B组 第二轮 第14名', 'B组 第二轮 第15名', 'B组 第二轮 第16名'],
            forecasts: [
              { red: 13, blue: 14 },
              { red: 15, blue: 16 },
            ]
          }
        ]
      }
    },
    {
      id: '#7',
      text: '晋级 3-0',
      x: rx - groupXOffset + 15,
      y: ry - 264,
      data: {
        title: '晋级淘汰赛 3-0',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: 4,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [33, 34],
            losers: [],
            text: ['第33场胜者', '第34场胜者'],
          },
          {
            matches: [],
            winners: [41, 42],
            losers: [],
            text: ['第41场胜者', '第42场胜者'],
          }
        ]
      }
    },
    {
      id: '#8',
      text: '淘汰 0-3',
      x: rx - groupXOffset + 15,
      y: ry + 430,
      data: {
        title: '淘汰 0-3',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_loser_bg.png',
        borderColor: '#3E484D',
        collegeNameColor: '#9D9F9F',
        rankColor: '#4F4F4F',
        round: 4,
        type: 'eliminate',
        zones: [
          {
            matches: [],
            winners: [],
            losers: [39, 40],
            text: ['第39场败者', '第40场败者'],
          },
          {
            matches: [],
            winners: [],
            losers: [47, 48],
            text: ['第47场败者', '第48场败者'],
          }
        ]
      }
    },
    {
      id: '#9',
      text: '第四轮 2-1',
      x: 0,
      y: ry - 180,
      data: {
        title: '瑞士轮第四轮 2-1',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: 4,
        type: 'match',
        zones: [
          {
            matches: [49, 50, 51],
            winners: [35, 36, 37, 38],
            losers: [33, 34],
            // 3-4 6-5 8-7
            text: ['A组 第三轮 第3名', 'A组 第三轮 第4名', 'A组 第三轮 第6名', 'A组 第三轮 第5名', 'A组 第三轮 第8名', 'A组 第三轮 第7名'],
            forecasts: [
              { red: 3, blue: 4 },
              { red: 6, blue: 5 },
              { red: 8, blue: 7 },
            ]
          },
          {
            matches: [55, 56, 57],
            winners: [43, 44, 45, 46],
            losers: [41, 42],
            // 4-3 5-6 7-8
            text: ['B组 第三轮 第4名', 'B组 第三轮 第3名', 'B组 第三轮 第5名', 'B组 第三轮 第6名', 'B组 第三轮 第7名', 'B组 第三轮 第8名'],
            forecasts: [
              { red: 4, blue: 3 },
              { red: 5, blue: 6 },
              { red: 7, blue: 8 },
            ]
          }
        ]
      }
    },
    {
      id: '#10',
      text: '第四轮 1-2',
      x: 0,
      y: ry + 180,
      data: {
        title: '瑞士轮第四轮 1-2',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: 4,
        type: 'match',
        zones: [
          {
            matches: [52, 53, 54],
            winners: [39, 40],
            losers: [35, 36, 37, 38],
            // 9-10 11-12 14-13
            text: ['A组 第三轮 第9名', 'A组 第三轮 第10名', 'A组 第三轮 第11名', 'A组 第三轮 第12名', 'A组 第三轮 第14名', 'A组 第三轮 第13名'],
            forecasts: [
              { red: 9, blue: 10 },
              { red: 11, blue: 12 },
              { red: 14, blue: 13 },
            ]
          },
          {
            matches: [58, 59, 60],
            winners: [47, 48],
            losers: [43, 44, 45, 46],
            // 10-9 12-11 13-14
            text: ['B组 第三轮 第10名', 'B组 第三轮 第9名', 'B组 第三轮 第12名', 'B组 第三轮 第11名', 'B组 第三轮 第13名', 'B组 第三轮 第14名'],
            forecasts: [
              { red: 10, blue: 9 },
              { red: 12, blue: 11 },
              { red: 13, blue: 14 },
            ]
          }
        ]
      }
    },
  ],
  lines: [
    { from: '#1', to: '#2', },
    { from: '#1', to: '#3', },
    { from: '#2', to: '#4', },
    { from: '#2', to: '#5', },
    { from: '#3', to: '#5', },
    { from: '#3', to: '#6', },
    { from: '#4', to: '#7', lineShape: 5 },
    { from: '#6', to: '#8', lineShape: 5 },
    { from: '#4', to: '#9', },
    { from: '#5', to: '#9', },
    { from: '#5', to: '#10', },
    { from: '#6', to: '#10', },
  ],
}

export const GroupZoneGroup1RoundOrder = {
  'A': [1, 17, 33, 49],
  'B': [9, 25, 41, 55],
}

export const GroupZoneGroup2JsonData: ZoneJsonData = {
  rootId: '#1',
  nodes: [
    {
      id: '#1',
      text: '晋级 3-0',
      x: rx - 2 * groupXOffset,
      y: ry - 320,
      data: {
        title: '晋级淘汰赛 3-0',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: 1,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [33, 34],
            losers: [],
            text: ['第33场胜者', '第34场胜者'],
          },
          {
            matches: [],
            winners: [41, 42],
            losers: [],
            text: ['第41场胜者', '第42场胜者'],
          }
        ]
      }
    },
    {
      id: '#2',
      text: '第四轮 2-1',
      x: rx - 2 * groupXOffset,
      y: ry - 140,
      data: {
        title: '瑞士轮第四轮 2-1',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: 1,
        type: 'match',
        zones: [
          {
            matches: [49, 50, 51],
            winners: [35, 36, 37, 38],
            losers: [33, 34],
            text: ['A组 第三轮 第3名', 'A组 第三轮 第4名', 'A组 第三轮 第6名', 'A组 第三轮 第5名', 'A组 第三轮 第8名', 'A组 第三轮 第7名'],
            forecasts: [
              { red: 3, blue: 4 },
              { red: 6, blue: 5 },
              { red: 8, blue: 7 },
            ]
          },
          {
            matches: [55, 56, 57],
            winners: [43, 44, 45, 46],
            losers: [41, 42],
            text: ['B组 第三轮 第4名', 'B组 第三轮 第3名', 'B组 第三轮 第5名', 'B组 第三轮 第6名', 'B组 第三轮 第7名', 'B组 第三轮 第8名'],
            forecasts: [
              { red: 4, blue: 3 },
              { red: 5, blue: 6 },
              { red: 7, blue: 8 },
            ]
          }
        ]
      }
    },
    {
      id: '#3',
      text: '第四轮 1-2',
      x: rx - 2 * groupXOffset,
      y: ry + 200,
      data: {
        title: '瑞士轮第四轮 1-2',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: 1,
        type: 'match',
        zones: [
          {
            matches: [52, 53, 54],
            winners: [39, 40],
            losers: [35, 36, 37, 38],
            text: ['A组 第三轮 第9名', 'A组 第三轮 第10名', 'A组 第三轮 第11名', 'A组 第三轮 第12名', 'A组 第三轮 第14名', 'A组 第三轮 第13名'],
            forecasts: [
              { red: 9, blue: 10 },
              { red: 11, blue: 12 },
              { red: 14, blue: 13 },
            ]
          },
          {
            matches: [58, 59, 60],
            winners: [47, 48],
            losers: [43, 44, 45, 46],
            text: ['B组 第三轮 第10名', 'B组 第三轮 第9名', 'B组 第三轮 第12名', 'B组 第三轮 第11名', 'B组 第三轮 第13名', 'B组 第三轮 第14名'],
            forecasts: [
              { red: 10, blue: 9 },
              { red: 12, blue: 11 },
              { red: 13, blue: 14 },
            ]
          }
        ]
      }
    },
    {
      id: '#4',
      text: '晋级 3-1',
      x: rx - groupXOffset,
      y: ry - 270,
      data: {
        title: '晋级淘汰赛 3-1',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: 2,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [49, 50, 51],
            losers: [],
            text: ['第49场胜者', '第50场胜者', '第51场胜者'],
          },
          {
            matches: [],
            winners: [55, 56, 57],
            losers: [],
            text: ['第55场胜者', '第56场胜者', '第57场胜者'],
          }
        ]
      }
    },
    {
      id: '#5',
      text: '第五轮 2-2',
      x: rx - groupXOffset,
      y: ry - 40,
      data: {
        title: '瑞士轮第五轮 2-2',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: 2,
        type: 'match',
        zones: [
          {
            matches: [61, 62, 63],
            winners: [52, 53, 54],
            losers: [49, 50, 51],
            text: ['A组 第四轮 第6名', 'A组 第四轮 第7名', 'A组 第四轮 第8名', 'A组 第四轮 第9名', 'A组 第四轮 第11名', 'A组 第四轮 第10名'],
            forecasts: [
              { red: 6, blue: 7 },
              { red: 8, blue: 9 },
              { red: 11, blue: 10 },
            ]
          },
          {
            matches: [64, 65, 66],
            winners: [58, 59, 60],
            losers: [55, 56, 57],
            text: ['B组 第四轮 第7名', 'B组 第四轮 第6名', 'B组 第四轮 第8名', 'B组 第四轮 第9名', 'B组 第四轮 第11名', 'B组 第四轮 第10名'],
            forecasts: [
              { red: 7, blue: 6 },
              { red: 8, blue: 9 },
              { red: 11, blue: 10 },
            ]
          }
        ]
      }
    },
    {
      id: '#6',
      text: '淘汰 1-3',
      x: rx - groupXOffset,
      y: ry + 300,
      data: {
        title: '淘汰 1-3',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_loser_bg.png',
        borderColor: '#3E484D',
        collegeNameColor: '#9D9F9F',
        rankColor: '#4F4F4F',
        round: 2,
        type: 'eliminate',
        zones: [
          {
            matches: [],
            winners: [],
            losers: [52, 53, 54],
            text: ['第52场败者', '第53场败者', '第54场败者'],
          },
          {
            matches: [],
            winners: [],
            losers: [58, 59, 60],
            text: ['第58场败者', '第59场败者', '第60场败者'],
          }
        ]
      }
    },
    {
      id: '#7',
      text: '晋级 3-2',
      x: 0,
      y: ry - 160,
      data: {
        title: '晋级淘汰赛 3-2',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: 3,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [61, 62, 63],
            losers: [],
            text: ['第61场胜者', '第62场胜者', '第63场胜者'],
          },
          {
            matches: [],
            winners: [64, 65, 66],
            losers: [],
            text: ['第64场胜者', '第65场胜者', '第66场胜者'],
          }
        ]
      }
    },
    {
      id: '#8',
      text: '淘汰 2-3',
      x: 0,
      y: ry + 200,
      data: {
        title: '淘汰 2-3',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_loser_bg.png',
        borderColor: '#3E484D',
        collegeNameColor: '#9D9F9F',
        rankColor: '#4F4F4F',
        round: 3,
        type: 'eliminate',
        zones: [
          {
            matches: [],
            winners: [],
            losers: [61, 62, 63],
            text: ['第61场败者', '第62场败者', '第63场败者'],
          },
          {
            matches: [],
            winners: [],
            losers: [64, 65, 66],
            text: ['第64场败者', '第65场败者', '第66场败者'],
          }
        ]
      }
    }
  ],
  lines: [
    { from: '#2', to: '#4', },
    { from: '#2', to: '#5', },
    { from: '#3', to: '#5', },
    { from: '#3', to: '#6', },
    { from: '#5', to: '#7', },
    { from: '#5', to: '#8', },
  ],
}

export const GroupZoneGroup2RoundOrder = {
  'A': [49, 61, 61],
  'B': [55, 64, 64],
}

export const GroupZoneGroupJsonData: ZoneJsonData = {
  rootId: '#1',
  nodes: [
    {
      id: '#1',
      text: '第一轮 0:0',
      x: rx - 3 * groupXOffset,
      y: ry,
      data: {
        title: '瑞士轮第一轮 0胜0负',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: 1,
        type: 'match',
        zones: [
          {
            matches: [1, 2, 3, 4, 5, 6, 7, 8],
            winners: [],
            losers: [],
            text: ['A1', 'A9', 'A2', 'A10', 'A3', 'A11', 'A4', 'A12', 'A5', 'A13', 'A6', 'A14', 'A7', 'A15', 'A8', 'A16']
          },
          {
            matches: [9, 10, 11, 12, 13, 14, 15, 16],
            winners: [],
            losers: [],
            text: ['B1', 'B9', 'B2', 'B10', 'B3', 'B11', 'B4', 'B12', 'B5', 'B13', 'B6', 'B14', 'B7', 'B15', 'B8', 'B16']
          }
        ]
      }
    },
    {
      id: '#2',
      text: '第二轮 1:0',
      x: rx - 2 * groupXOffset,
      y: ry - 60,
      data: {
        title: '瑞士轮第二轮 1胜0负',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5a879c',
        round: 2,
        type: 'match',
        zones: [
          {
            matches: [17, 18, 19, 20],
            winners: [1, 2, 3, 4, 5, 6, 7, 8],
            losers: [],
            text: ['A组 第一轮 第1名', 'A组 第一轮 第2名', 'A组 第一轮 第3名', 'A组 第一轮 第4名', 'A组 第一轮 第5名', 'A组 第一轮 第6名', 'A组 第一轮 第7名', 'A组 第一轮 第8名'],
            forecasts: [
              { red: 1, blue: 2 },
              { red: 3, blue: 4 },
              { red: 5, blue: 6 },
              { red: 7, blue: 8 }
            ]
          },
          {
            matches: [25, 26, 27, 28],
            winners: [9, 10, 11, 12, 13, 14, 15, 16],
            losers: [],
            text: ['B组 第一轮 第1名', 'B组 第一轮 第2名', 'B组 第一轮 第3名', 'B组 第一轮 第4名', 'B组 第一轮 第5名', 'B组 第一轮 第6名', 'B组 第一轮 第7名', 'B组 第一轮 第8名'],
            forecasts: [
              { red: 1, blue: 2 },
              { red: 3, blue: 4 },
              { red: 5, blue: 6 },
              { red: 7, blue: 8 }
            ]
          }
        ]
      }
    },
    {
      id: '#3',
      text: '第二轮 0:1',
      x: rx - 2 * groupXOffset,
      y: ry + 360,
      data: {
        title: '瑞士轮第二轮 0胜1负',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5a879c',
        round: 2,
        type: 'match',
        zones: [
          {
            matches: [21, 22, 23, 24],
            winners: [],
            losers: [1, 2, 3, 4, 5, 6, 7, 8],
            text: ['A组 第一轮 第9名', 'A组 第一轮 第10名', 'A组 第一轮 第11名', 'A组 第一轮 第12名', 'A组 第一轮 第13名', 'A组 第一轮 第14名', 'A组 第一轮 第15名', 'A组 第一轮 第16名'],
            forecasts: [
              { red: 9, blue: 10 },
              { red: 11, blue: 12 },
              { red: 13, blue: 14 },
              { red: 15, blue: 16 }
            ]
          },
          {
            matches: [29, 30, 31, 32],
            winners: [],
            losers: [9, 10, 11, 12, 13, 14, 15, 16],
            text: ['B组 第一轮 第9名', 'B组 第一轮 第10名', 'B组 第一轮 第11名', 'B组 第一轮 第12名', 'B组 第一轮 第13名', 'B组 第一轮 第14名', 'B组 第一轮 第15名', 'B组 第一轮 第16名'],
            forecasts: [
              { red: 9, blue: 10 },
              { red: 11, blue: 12 },
              { red: 13, blue: 14 },
              { red: 15, blue: 16 }
            ]
          }
        ]
      }
    },
    {
      id: '#4',
      text: '第三轮 2:0',
      x: rx - groupXOffset,
      y: ry - 120,
      data: {
        title: '瑞士轮第三轮 2胜0负',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5a879c',
        round: 3,
        type: 'match',
        zones: [
          {
            matches: [33, 34],
            winners: [17, 18, 19, 20],
            losers: [],
            text: ['A组 第二轮 第1名', 'A组 第二轮 第2名', 'A组 第二轮 第3名', 'A组 第二轮 第4名'],
            forecasts: [
              { red: 2, blue: 1 },
              { red: 4, blue: 3 }
            ]
          },
          {
            matches: [39, 40],
            winners: [25, 26, 27, 28],
            losers: [],
            text: ['B组 第二轮 第1名', 'B组 第二轮 第2名', 'B组 第二轮 第3名', 'B组 第二轮 第4名'],
            forecasts: [
              { red: 2, blue: 1 },
              { red: 4, blue: 3 }
            ]
          }
        ]
      }
    },
    {
      id: '#5',
      text: '第三轮 1:1',
      x: rx - groupXOffset,
      y: ry + 125,
      data: {
        title: '瑞士轮第三轮 1胜1负',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5a879c',
        round: 3,
        type: 'match',
        zones: [
          {
            matches: [35, 36, 37, 38],
            winners: [21, 22, 23, 24],
            losers: [17, 18, 19, 20],
            text: ['A组 第二轮 第5名', 'A组 第二轮 第6名', 'A组 第二轮 第7名', 'A组 第二轮 第8名', 'A组 第二轮 第9名', 'A组 第二轮 第10名', 'A组 第二轮 第11名', 'A组 第二轮 第12名'],
            forecasts: [
              { red: 6, blue: 5 },
              { red: 8, blue: 7 },
              { red: 10, blue: 9 },
              { red: 12, blue: 11 }
            ]
          },
          {
            matches: [41, 42, 43, 44],
            winners: [29, 30, 31, 32],
            losers: [25, 26, 27, 28],
            text: ['B组 第二轮 第5名', 'B组 第二轮 第6名', 'B组 第二轮 第7名', 'B组 第二轮 第8名', 'B组 第二轮 第9名', 'B组 第二轮 第10名', 'B组 第二轮 第11名', 'B组 第二轮 第12名'],
            forecasts: [
              { red: 6, blue: 5 },
              { red: 8, blue: 7 },
              { red: 10, blue: 9 },
              { red: 12, blue: 11 }
            ]
          }
        ]
      }
    },
    {
      id: '#6',
      text: '第三轮 0:2 淘汰',
      x: rx - groupXOffset,
      y: ry + 545,
      data: {
        title: '淘汰 0胜2负',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_loser_bg.png',
        borderColor: '#3E484D',
        collegeNameColor: '#9D9F9F',
        rankColor: '#4F4F4F',
        round: 3,
        type: 'eliminate',
        zones: [
          {
            matches: [],
            winners: [],
            losers: [21, 22, 23, 24],
            text: ['A组 第13名', 'A组 第14名', 'A组 第15名', 'A组 第16名']
          },
          {
            matches: [],
            winners: [],
            losers: [29, 30, 31, 32],
            text: ['B组 第13名', 'B组 第14名', 'B组 第15名', 'B组 第16名']
          }
        ]
      }
    },
    {
      id: '#7',
      text: '第三轮 3:0 晋级',
      x: 0, // MUST BE 0
      y: 0, // MUST BE 0
      data: {
        title: '晋级淘汰赛 3胜0负',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: 4,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [33, 34],
            losers: [],
            text: ['A组 第1名', 'A组 第2名']
          },
          {
            matches: [],
            winners: [39, 40],
            losers: [],
            text: ['B组 第1名', 'B组 第2名']
          }
        ]
      }
    },
    {
      id: '#8',
      text: '第三轮 2:1 晋级',
      x: rx,
      y: ry + 150,
      data: {
        title: '晋级淘汰赛 2胜1负',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: 4,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [35, 36, 37, 38],
            losers: [33, 34],
            text: ['A组 第3名', 'A组 第4名', 'A组 第5名', 'A组 第6名', 'A组 第7名', 'A组 第8名']
          },
          {
            matches: [],
            winners: [41, 42, 43, 44],
            losers: [39, 40],
            text: ['B组 第3名', 'B组 第4名', 'B组 第5名', 'B组 第6名', 'B组 第7名', 'B组 第8名']
          }
        ]
      }
    },
    {
      id: '#9',
      text: '第三轮 1:2 淘汰',
      x: rx,
      y: ry + 520,
      data: {
        title: '淘汰 1胜2负',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_loser_bg.png',
        borderColor: '#3E484D',
        collegeNameColor: '#9D9F9F',
        rankColor: '#4F4F4F',
        round: 4,
        type: 'eliminate',
        zones: [
          {
            matches: [],
            winners: [],
            losers: [35, 36, 37, 38],
            text: ['A组 第9名', 'A组 第10名', 'A组 第11名', 'A组 第12名']
          },
          {
            matches: [],
            winners: [],
            losers: [41, 42, 43, 44],
            text: ['B组 第9名', 'B组 第10名', 'B组 第11名', 'B组 第12名']
          }
        ]
      }
    },
  ],
  lines: [
    { from: '#1', to: '#2', },
    { from: '#1', to: '#3', },
    { from: '#2', to: '#4', },
    { from: '#2', to: '#5', },
    { from: '#3', to: '#5', },
    { from: '#3', to: '#6', },
    { from: '#4', to: '#7', },
    { from: '#4', to: '#8', },
    { from: '#5', to: '#8', },
    { from: '#5', to: '#9', },
  ],
}

export const GroupZoneRoundOrder = {
  'A': [1, 17, 33, 46],
  'B': [9, 25, 39, 46],
}

const quotaCompetitionXOffset = 435;

export const QuotaCompetition_11_5_JsonData: ZoneJsonData = {
  rootId: '#1',
  nodes: [
    {
      id: '#1',
      text: '全国赛名额争夺 0-0',
      x: rx,
      y: ry,
      data: {
        title: '全国赛名额争夺 0-0',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: -1,
        type: 'match',
        zones: [
          {
            matches: [79, 80, 81, 82],
            winners: [],
            losers: [67, 68, 69, 70, 71, 72, 73, 74],
            text: ['第67场 败者', '第68场 败者', '第69场 败者', '第70场 败者', '第71场 败者', '第72场 败者', '第73场 败者', '第74场 败者']
          },
        ]
      }
    },
    {
      id: '#2',
      text: '全国赛名额争夺 1-0',
      x: rx + quotaCompetitionXOffset,
      y: ry - 100,
      data: {
        title: '全国赛名额争夺 1-0',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: -1,
        type: 'match',
        zones: [
          {
            matches: [85, 86],
            winners: [79, 80, 81, 82],
            losers: [],
            text: ['第79场 胜者', '第80场 胜者', '第81场 胜者', '第82场 胜者']
          },
        ]
      }
    },
    {
      id: '#3',
      text: '晋级复活赛 0-1',
      x: rx + quotaCompetitionXOffset,
      y: ry + 200,
      data: {
        title: '晋级复活赛 0-1',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: -1,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [],
            losers: [79, 80, 81, 82],
            text: ['第79场 败者', '第80场 败者', '第81场 败者', '第82场 败者']
          },
        ]
      }
    },
    {
      id: '#4',
      text: '晋级全国赛 2-0',
      x: rx + quotaCompetitionXOffset * 2,
      y: ry - 180,
      data: {
        title: '晋级全国赛 2-0',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: -1,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [85, 86],
            losers: [],
            text: ['第85场 胜者', '第86场 胜者']
          },
        ]
      }
    },
    {
      id: '#5',
      text: '全国赛名额争夺 1-1',
      x: rx + quotaCompetitionXOffset * 2,
      y: ry + 40,
      data: {
        title: '全国赛名额争夺 1-1',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: -1,
        type: 'match',
        zones: [
          {
            matches: [88],
            winners: [],
            losers: [85, 86],
            text: ['第85场 败者', '第86场 败者']
          },
        ]
      }
    },
    {
      id: '#6',
      text: '晋级全国赛 2-1',
      x: rx + quotaCompetitionXOffset * 3,
      y: ry - 40,
      data: {
        title: '晋级全国赛 2-1',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: -1,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [88],
            losers: [],
            text: ['第88场 胜者']
          },
        ]
      }
    },
    {
      id: '#7',
      text: '晋级复活赛 1-2',
      x: rx + quotaCompetitionXOffset * 3,
      y: ry + 140,
      data: {
        title: '晋级复活赛 1-2',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: -1,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [],
            losers: [88],
            text: ['第88场 败者']
          },
        ]
      }
    },
  ],
  lines: [
    { from: '#1', to: '#2', },
    { from: '#1', to: '#3', },
    { from: '#2', to: '#4', },
    { from: '#2', to: '#5', },
    { from: '#5', to: '#6', },
    { from: '#5', to: '#7', },
  ],
}

export const QuotaCompetition_8_6_JsonData: ZoneJsonData = {
  rootId: '#1',
  nodes: [
    {
      id: '#1',
      text: '复活赛名额争夺 0-0',
      x: rx,
      y: ry,
      data: {
        title: '复活赛名额争夺 0-0',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: -1,
        type: 'match',
        zones: [
          {
            matches: [79, 80, 81, 82],
            winners: [],
            losers: [67, 68, 70, 69, 71, 72, 74, 73],
            text: ['第67场 败者', '第68场 败者', '第70场 败者', '第69场 败者', '第71场 败者', '第72场 败者', '第74场 败者', '第73场 败者']
          },
        ]
      }
    },
    {
      id: '#2',
      text: '晋级复活赛 1-0',
      x: rx + quotaCompetitionXOffset,
      y: ry - 100,
      data: {
        title: '晋级复活赛 1-0',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: -1,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [79, 80, 81, 82],
            losers: [],
            text: ['第79场 胜者', '第80场 胜者', '第81场 胜者', '第82场 胜者']
          }
        ]
      }
    },
    {
      id: '#3',
      text: '复活赛名额争夺 0-1',
      x: rx + quotaCompetitionXOffset,
      y: ry + 200,
      data: {
        title: '复活赛名额争夺 0-1',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: -1,
        type: 'match',
        zones: [
          {
            matches: [85, 86],
            winners: [],
            losers: [79, 81, 80, 82],
            text: ['第79场 败者', '第81场 败者', '第80场 败者', '第82场 败者']
          }
        ]
      }
    },
    {
      id: '#4',
      text: '晋级复活赛 1-1',
      x: rx + quotaCompetitionXOffset * 2,
      y: ry + 120,
      data: {
        title: '晋级复活赛 1-1',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: -1,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [85, 86],
            losers: [],
            text: ['第85场 胜者', '第86场 胜者']
          }
        ]
      }
    },
    {
      id: '#5',
      text: '淘汰 0-2',
      x: rx + quotaCompetitionXOffset * 2,
      y: ry + 320,
      data: {
        title: '淘汰 0-2',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_loser_bg.png',
        borderColor: '#3E484D',
        collegeNameColor: '#9D9F9F',
        rankColor: '#4F4F4F',
        round: -1,
        type: 'eliminate',
        zones: [
          {
            matches: [],
            winners: [],
            losers: [85, 86],
            text: ['第85场 败者', '第86场 败者']
          },
        ]
      }
    }
  ],
  lines: [
    { from: '#1', to: '#2', },
    { from: '#1', to: '#3', },
    { from: '#3', to: '#4', },
    { from: '#3', to: '#5', },
  ],
}

export const QuotaCompetition_9_5_JsonData: ZoneJsonData = {
  rootId: '#1',
  nodes: [
    {
      id: '#1',
      text: '全国赛名额争夺 0-0',
      x: rx,
      y: ry,
      data: {
        title: '全国赛名额争夺 0-0',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: -1,
        type: 'match',
        zones: [
          {
            matches: [79, 80, 81, 82],
            winners: [],
            losers: [67, 68, 70, 69, 71, 72, 74, 73],
            text: ['第67场 败者', '第68场 败者', '第70场 败者', '第69场 败者', '第71场 败者', '第72场 败者', '第74场 败者', '第73场 败者']
          },
        ]
      }
    },
    {
      id: '#2',
      text: '全国赛名额争夺 1-0',
      x: rx + quotaCompetitionXOffset,
      y: ry - 100,
      data: {
        title: '全国赛名额争夺 1-0',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: -1,
        type: 'match',
        zones: [
          {
            matches: [85, 86],
            winners: [79, 81, 80, 82],
            losers: [],
            text: ['第79场 胜者', '第81场 胜者', '第80场 胜者', '第82场 胜者']
          }
        ]
      }
    },
    {
      id: '#3',
      text: '复活赛名额争夺 0-1',
      x: rx + quotaCompetitionXOffset,
      y: ry + 200,
      data: {
        title: '复活赛名额争夺 0-1',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: -1,
        type: 'match',
        zones: [
          {
            matches: [87, 88],
            winners: [],
            losers: [79, 81, 80, 82],
            text: ['第79场 败者', '第81场 败者', '第80场 败者', '第82场 败者']
          }
        ]
      }
    },
    {
      id: '#4',
      text: '全国赛名额争夺 2-0',
      x: rx + quotaCompetitionXOffset * 2,
      y: ry - 200,
      data: {
        title: '全国赛名额争夺 2-0',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_bg.png',
        borderColor: '#5A879C',
        round: -1,
        type: 'match',
        zones: [
          {
            matches: [90],
            winners: [85, 86],
            losers: [],
            text: ['第85场 胜者', '第86场 胜者']
          }
        ]
      }
    },
    {
      id: '#5',
      text: '晋级复活赛 1-1',
      x: rx + quotaCompetitionXOffset * 2,
      y: ry + 0,
      data: {
        title: '晋级复活赛 1-1',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: -1,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [87, 88],
            losers: [85, 86],
            text: ['第85场 败者', '第86场 败者', '第87场 胜者', '第88场 胜者']
          }
        ]
      }
    },
    {
      id: '#6',
      text: '淘汰 0-2',
      x: rx + quotaCompetitionXOffset * 2,
      y: ry + 300,
      data: {
        title: '淘汰 0-2',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_loser_bg.png',
        borderColor: '#3E484D',
        collegeNameColor: '#9D9F9F',
        rankColor: '#4F4F4F',
        round: -1,
        type: 'eliminate',
        zones: [
          {
            matches: [],
            winners: [],
            losers: [87, 88],
            text: ['第87场 败者', '第88场 败者']
          },
        ]
      }
    },
    {
      id: '#7',
      text: '晋级全国赛 3-0',
      x: rx + quotaCompetitionXOffset * 3,
      y: ry - 280,
      data: {
        title: '晋级全国赛 3-0',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: -1,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [90],
            losers: [],
            text: ['第90场 胜者']
          }
        ]
      }
    },
    {
      id: '#8',
      text: '晋级复活赛 2-1',
      x: rx + quotaCompetitionXOffset * 3,
      y: ry - 80,
      data: {
        title: '晋级复活赛 2-1',
        titleColor: '#FFFFFF',
        titleImage: '/static/title_winner_bg.png',
        borderColor: '#E7A662',
        collegeNameColor: '#FFB553',
        rankColor: '#FFA500',
        round: -1,
        type: 'promote',
        zones: [
          {
            matches: [],
            winners: [],
            losers: [90],
            text: ['第90场 败者']
          }
        ]
      }
    }
  ],
  lines: [
    { from: '#1', to: '#2', },
    { from: '#1', to: '#3', },
    { from: '#2', to: '#4', },
    { from: '#2', to: '#5', },
    { from: '#3', to: '#5', },
    { from: '#3', to: '#6', },
    { from: '#4', to: '#7', },
    { from: '#4', to: '#8', },
  ]
}

const KnockoutXOffset = 380;
const KnockoutYOffset = 50;

export const GroupZoneKnockoutOrderNumbers = {
  498: [0,
    45, 46, 47, 48, 49, 50, 51, 52,
    53, 54, 57, 58,
    63, 64,
    66, 67,
  ],
  499: [0,
    45, 46, 47, 48, 49, 50, 51, 52,
    53, 54, 55, 56,
    61, 62,
    67, 69,
  ],
  500: [0,
    45, 46, 47, 48, 49, 50, 51, 52,
    53, 54, 55, 56,
    61, 62,
    65, 66,
  ],
  565: [0,
    67, 68, 69, 70, 71, 72, 73, 74,
    75, 76, 77, 78,
    83, 84,
    87, 89,
  ],
  566: [0,
    67, 68, 69, 70, 71, 72, 73, 74,
    75, 76, 77, 78,
    83, 84,
    87, 88,
  ],
  567: [0,
    67, 68, 69, 70, 71, 72, 73, 74,
    75, 76, 77, 78,
    83, 84,
    89, 91,
  ],
}

export const GroupZoneKnockoutTitleData: TitleData[] = [
  {
    left: rx - KnockoutXOffset * 3 - 180 + 20,
    top: ry - KnockoutYOffset * 7 - 40,
    title: '16进8淘汰赛',
    image: '/static/title_bg.png',
  },
  {
    left: rx - KnockoutXOffset * 2 - 120 + 20,
    top: ry - KnockoutYOffset * 6 - 40,
    title: '8进4淘汰赛',
    image: '/static/title_bg.png',
  },
  {
    left: rx - KnockoutXOffset - 60 + 20,
    top: ry - KnockoutYOffset * 4 - 40,
    title: '半决赛',
    image: '/static/title_bg.png',
  },
  {
    left: rx + 20,
    top: ry + KnockoutYOffset * 2 - 40,
    title: '季军争夺战',
    image: '/static/title_winner_bg.png',
  },
  {
    left: rx + 20,
    top: ry - KnockoutYOffset * 2 - 40,
    title: '冠军争夺战',
    image: '/static/title_winner_bg.png',
  },
]

export const GetGroupZoneKnockoutJsonData = (zoneId: number): ZoneJsonData => {
  return <ZoneJsonData>{
    rootId: '#16',
    nodes: [
      {
        id: '#1',
        text: '16进8淘汰赛 第1场',
        x: rx - KnockoutXOffset * 3 - 180,
        y: ry - KnockoutYOffset * 7,
        data: {
          title: '',
          titleColor: '#FFFFFF',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][1]],
              winners: [],
              losers: [],
              text: ['小组赛B 第1名', '小组赛A 第8名']
            },
          ]
        }
      },
      {
        id: '#2',
        text: '16进8淘汰赛 第2场',
        x: rx - KnockoutXOffset * 3 - 180,
        y: ry - KnockoutYOffset * 5,
        data: {
          title: '',
          titleColor: '#FFFFFF',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][2]],
              winners: [],
              losers: [],
              text: ['小组赛B 第5名', '小组赛A 第4名']
            },
          ]
        }
      },
      {
        id: '#3',
        text: '16进8淘汰赛 第3场',
        x: rx - KnockoutXOffset * 3 - 180,
        y: ry - KnockoutYOffset * 3,
        data: {
          title: '',
          titleColor: '#FFFFFF',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][3]],
              winners: [],
              losers: [],
              text: ['小组赛A 第7名', '小组赛B 第2名']
            },
          ]
        }
      },
      {
        id: '#4',
        text: '16进8淘汰赛 第4场',
        x: rx - KnockoutXOffset * 3 - 180,
        y: ry - KnockoutYOffset,
        data: {
          title: '',
          titleColor: '#FFFFFF',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][4]],
              winners: [],
              losers: [],
              text: ['小组赛A 第3名', '小组赛B 第6名']
            },
          ]
        }
      },
      {
        id: '#5',
        text: '16进8淘汰赛 第5场',
        x: rx - KnockoutXOffset * 3 - 180,
        y: ry + KnockoutYOffset,
        data: {
          title: '',
          titleColor: '#FFFFFF',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][5]],
              winners: [],
              losers: [],
              text: ['小组赛A 第6名', '小组赛B 第3名']
            },
          ]
        }
      },
      {
        id: '#6',
        text: '16进8淘汰赛 第6场',
        x: rx - KnockoutXOffset * 3 - 180,
        y: ry + KnockoutYOffset * 3,
        data: {
          title: '',
          titleColor: '#FFFFFF',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][6]],
              winners: [],
              losers: [],
              text: ['小组赛A 第2名', '小组赛B 第7名']
            },
          ]
        }
      },
      {
        id: '#7',
        text: '16进8淘汰赛 第7场',
        x: rx - KnockoutXOffset * 3 - 180,
        y: ry + KnockoutYOffset * 5,
        data: {
          title: '',
          titleColor: '#FFFFFF',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][7]],
              winners: [],
              losers: [],
              text: ['小组赛B 第4名', '小组赛A 第5名']
            },
          ]
        }
      },
      {
        id: '#8',
        text: '16进8淘汰赛 第8场',
        x: rx - KnockoutXOffset * 3 - 180,
        y: ry + KnockoutYOffset * 7,
        data: {
          title: '',
          titleColor: '#FFFFFF',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][8]],
              winners: [],
              losers: [],
              text: ['小组赛B 第8名', '小组赛A 第1名']
            },
          ]
        }
      },
      {
        id: '#9',
        text: '8进4淘汰赛 第1场',
        x: rx - KnockoutXOffset * 2 - 120,
        y: ry - KnockoutYOffset * 6,
        data: {
          title: '',
          titleColor: '#FFFFFF',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][9]],
              winners: [GroupZoneKnockoutOrderNumbers[zoneId][1], GroupZoneKnockoutOrderNumbers[zoneId][2]],
              losers: [],
              text: [`第${GroupZoneKnockoutOrderNumbers[zoneId][1]}场 胜者`, `第${GroupZoneKnockoutOrderNumbers[zoneId][2]}场 胜者`]
            },
          ]
        }
      },
      {
        id: '#10',
        text: '8进4淘汰赛 第2场',
        x: rx - KnockoutXOffset * 2 - 120,
        y: ry - KnockoutYOffset * 2,
        data: {
          title: '',
          titleColor: '#FFFFFF',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][10]],
              winners: [GroupZoneKnockoutOrderNumbers[zoneId][4], GroupZoneKnockoutOrderNumbers[zoneId][3]],
              losers: [],
              text: [`第${GroupZoneKnockoutOrderNumbers[zoneId][4]}场 胜者`, `第${GroupZoneKnockoutOrderNumbers[zoneId][3]}场 胜者`]
            },
          ]
        }
      },
      {
        id: '#11',
        text: '8进4淘汰赛 第3场',
        x: rx - KnockoutXOffset * 2 - 120,
        y: ry + KnockoutYOffset * 2,
        data: {
          title: '',
          titleColor: '#FFFFFF',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][11]],
              winners: [GroupZoneKnockoutOrderNumbers[zoneId][5], GroupZoneKnockoutOrderNumbers[zoneId][6]],
              losers: [],
              text: [`第${GroupZoneKnockoutOrderNumbers[zoneId][5]}场 胜者`, `第${GroupZoneKnockoutOrderNumbers[zoneId][6]}场 胜者`]
            },
          ]
        }
      },
      {
        id: '#12',
        text: '8进4淘汰赛 第4场',
        x: rx - KnockoutXOffset * 2 - 120,
        y: ry + KnockoutYOffset * 6,
        data: {
          title: '',
          titleColor: '#FFFFFF',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][12]],
              winners: [GroupZoneKnockoutOrderNumbers[zoneId][8], GroupZoneKnockoutOrderNumbers[zoneId][7]],
              losers: [],
              text: [`第${GroupZoneKnockoutOrderNumbers[zoneId][8]}场 胜者`, `第${GroupZoneKnockoutOrderNumbers[zoneId][7]}场 胜者`]
            },
          ]
        }
      },
      {
        id: '#13',
        text: '半决赛 第1场',
        x: rx - KnockoutXOffset - 60,
        y: ry - KnockoutYOffset * 4,
        data: {
          title: '',
          titleColor: '#FFFFFF',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][13]],
              winners: [GroupZoneKnockoutOrderNumbers[zoneId][9], GroupZoneKnockoutOrderNumbers[zoneId][11]],
              losers: [],
              text: [`第${GroupZoneKnockoutOrderNumbers[zoneId][9]}场 胜者`, `第${GroupZoneKnockoutOrderNumbers[zoneId][11]}场 胜者`]
            },
          ]
        }
      },
      {
        id: '#14',
        text: '半决赛 第2场',
        x: rx - KnockoutXOffset - 60,
        y: ry + KnockoutYOffset * 4,
        data: {
          title: '',
          titleColor: '#FFFFFF',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][14]],
              winners: [GroupZoneKnockoutOrderNumbers[zoneId][10], GroupZoneKnockoutOrderNumbers[zoneId][12]],
              losers: [],
              text: [`第${GroupZoneKnockoutOrderNumbers[zoneId][10]}场 胜者`, `第${GroupZoneKnockoutOrderNumbers[zoneId][12]}场 胜者`]
            },
          ]
        }
      },
      {
        id: '#15',
        text: '季军争夺战',
        x: rx,
        y: ry + KnockoutYOffset * 2,
        data: {
          title: '',
          collegeNameColor: '#FFB553',
          rankColor: '#FFA500',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][15]],
              winners: [],
              losers: [GroupZoneKnockoutOrderNumbers[zoneId][13], GroupZoneKnockoutOrderNumbers[zoneId][14]],
              text: [`第${GroupZoneKnockoutOrderNumbers[zoneId][13]}场 败者`, `第${GroupZoneKnockoutOrderNumbers[zoneId][14]}场 败者`]
            },
          ]
        }
      },
      {
        id: '#16',
        text: '冠军争夺战',
        x: rx,
        y: ry - KnockoutYOffset * 2,
        data: {
          title: '',
          collegeNameColor: '#FFB553',
          rankColor: '#FFA500',
          round: -1,
          type: 'match',
          zones: [
            {
              matches: [GroupZoneKnockoutOrderNumbers[zoneId][16]],
              winners: [GroupZoneKnockoutOrderNumbers[zoneId][13], GroupZoneKnockoutOrderNumbers[zoneId][14]],
              losers: [],
              text: [`第${GroupZoneKnockoutOrderNumbers[zoneId][13]}场 胜者`, `第${GroupZoneKnockoutOrderNumbers[zoneId][14]}场 胜者`]
            },
          ]
        }
      },
    ],
    lines: [
      { from: '#1', to: '#9', },
      { from: '#2', to: '#9', },
      { from: '#3', to: '#10', },
      { from: '#4', to: '#10', },
      { from: '#5', to: '#11', },
      { from: '#6', to: '#11', },
      { from: '#7', to: '#12', },
      { from: '#8', to: '#12', },
      { from: '#9', to: '#13', },
      { from: '#10', to: '#14', },
      { from: '#11', to: '#13', },
      { from: '#12', to: '#14', },
      { from: '#13', to: '#15', },
      { from: '#14', to: '#15', },
      { from: '#13', to: '#16', },
      { from: '#14', to: '#16', },
    ],
  }
}
