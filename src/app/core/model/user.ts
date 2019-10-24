interface Name {
    last: string;
    first: string;
}

export enum Job {
    'DEV' = 'dev',
    'QA' = 'qa',
    'MANAGER' = 'manager'
}

export interface User {
    id: number;
    name: Name;
    job: Job;
    birthDate: Date;
    balance: number;
}
