export interface User {
    id: number;
    username: string;
    password: string;
    
    teamId: number,
    color: string,
    isTeamLeader: boolean,
    teamName: string
}