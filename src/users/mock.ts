import { User } from "./interfaces/user.interface";

export const DUMMY_USERS: User[] = [
    {
        id: 11,
        username: 'vova',
        password: "123",
        teamId: 1,
        color: "fff",
        isTeamLeader: false,
        teamName: 'Dairy Stars'
    },
    {   id: 22,
        username: 'udi',
        password: "123",
        teamId: 1,
        color: "fff",
        isTeamLeader: false,
        teamName: 'Dairy Stars'
    },
    {   id: 33,
        username: 'saar',
        password: "123",
        teamId: 1,
        color: "fff",
        isTeamLeader: false,
        teamName: 'Dairy Stars'
    },
    {   id: 44,
        username: 'stav',
        password: "123",
        teamId: 1,
        color: "fff",
        isTeamLeader: false,
        teamName: 'Dairy Stars'
    },
    {   id: 55,
        username: 'noa',
        password: "123",
        teamId: 1,
        color: "fff",
        isTeamLeader: false,
        teamName: 'Dairy Stars'
    },
    {   id: 66,
        username: 'moshe',
        password: "123",
        teamId: 1,
        color: "fff",
        isTeamLeader: false,
        teamName: 'Dairy Stars'
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
const now = new Date("01-15-2022")

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

export const TEAM_USERS = DUMMY_USERS

export const DUMMY_USER_DATA = {
    user: DUMMY_USERS[0],
    roasters: ROASTERS,
    teamUsers: TEAM_USERS
}


