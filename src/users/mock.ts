import { User } from "./interfaces/user.interface";

export const DUMMY_USERS: User[] = [
    {
        id: "61f465092ae41713e918c898",
        username: 'vova',
        password: "123",
        teamId: '61eabbf8332da470b4619ae5',
        color: "fff",
        isTeamLeader: false,
    },
    {   id: "61f465092ae41713e918c899",
        username: 'udi',
        password: "123",
        teamId: '61eabbf8332da470b4619ae5',
        color: "fff",
        isTeamLeader: false,
    },
    {   id: "61f465092ae41713e918c89a",
        username: 'saar',
        password: "123",
        teamId: '61eabbf8332da470b4619ae5',
        color: "fff",
        isTeamLeader: false,
    },
    {   id: "61f465092ae41713e918c89b",
        username: 'stav',
        password: "123",
        teamId: '61eabbf8332da470b4619ae5',
        color: "fff",
        isTeamLeader: false,
    },
    {   id: "61f465092ae41713e918c89c",
        username: 'noa',
        password: "123",
        teamId: '61eabbf8332da470b4619ae5',
        color: "fff",
        isTeamLeader: false,
    },
    {   
        id: "61f465092ae41713e918c89d",
        username: 'moshe',
        password: "123",
        teamId: '61eabbf8332da470b4619ae5',
        color: "fff",
        isTeamLeader: false,
    }
]


export const WEEK_NAMES = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי']
export const WEEK = [0,1,2,3,4];
export const EMPTY_ROASTER = { date:new Date(), users: []}

export const addDaysToDate = (date, days = 7) => {
  var datePlusWeek = new Date(date);
  datePlusWeek.setDate(datePlusWeek.getDate() + days);
  return datePlusWeek
}
const now = new Date("15-01-2022")

export const ROASTERS = [
    {date: addDaysToDate(now, 1), users: [DUMMY_USERS[0]]},
    {date: addDaysToDate(now, 2), users: [DUMMY_USERS[1], DUMMY_USERS[2]]},
    {date: addDaysToDate(now, 3), users: [DUMMY_USERS[1], DUMMY_USERS[2]]},
    {date: addDaysToDate(now, 4), users: [DUMMY_USERS[1], DUMMY_USERS[2]]},
    {date: addDaysToDate(now, 5), users: [DUMMY_USERS[0]]},
    {date: addDaysToDate(now, 6), users: [DUMMY_USERS[0]]},
    {date: addDaysToDate(now, 7), users: [DUMMY_USERS[1], DUMMY_USERS[2]]},
    {date: addDaysToDate(now, 8), users: [DUMMY_USERS[1], DUMMY_USERS[2]]},
    {date: addDaysToDate(now, 9), users: [DUMMY_USERS[0], DUMMY_USERS[1], DUMMY_USERS[2], DUMMY_USERS[3], DUMMY_USERS[4], DUMMY_USERS[5]]},
    {date: addDaysToDate(now, 10), users: [DUMMY_USERS[1], DUMMY_USERS[2]]}
]

export const USER_IDS_ROASTERS = [
    { date: "16-01-2022", users: [DUMMY_USERS[0].id]},
    { date: "17-01-2022", users: [DUMMY_USERS[1].id, DUMMY_USERS[2].id]},
    { date: "18-01-2022", users: [DUMMY_USERS[1].id, DUMMY_USERS[2].id]},
    { date: "19-01-2022", users: [DUMMY_USERS[1].id, DUMMY_USERS[2].id]},
    { date: "20-01-2022", users: [DUMMY_USERS[0].id]},
    { date: "21-01-2022", users: [DUMMY_USERS[0].id]},
    { date: "22-01-2022", users: [DUMMY_USERS[1].id, DUMMY_USERS[2].id]},
    { date: "23-01-2022", users: [DUMMY_USERS[1].id, DUMMY_USERS[2].id]},
    { date: "24-01-2022", users: [DUMMY_USERS[0].id, DUMMY_USERS[1].id, DUMMY_USERS[2].id, DUMMY_USERS[3].id, DUMMY_USERS[4].id, DUMMY_USERS[5].id]},
    { date: "25-01-2022", users: [DUMMY_USERS[1].id, DUMMY_USERS[2].id]}
]


export const TEAM_USERS = DUMMY_USERS

export const DUMMY_USER_DATA = {
    user: DUMMY_USERS[0],
    roasters: ROASTERS,
    teamUsers: TEAM_USERS
}


