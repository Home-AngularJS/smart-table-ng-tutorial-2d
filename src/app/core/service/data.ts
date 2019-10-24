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


export const data = [
    {
        id: 0,
        name: {
            first: "Cedric",
            last: "Robin"
        },
        birthDate: new Date ("1985-12-30T19:09:31.349Z"),
        balance: 4122,
        job: Job.DEV
    },
    {
        id: 1,
        name: {
            first: "Elsa",
            last: "Romus"
        },
        birthDate: new Date ("2018-10-21T05:52:44.497Z"),
        balance: 858,
        job: Job.DEV
    },
    {
        id: 2,
        name: {
            first: "Benjamin",
            last: "Boulus"
        },
        birthDate: new Date ("1978-04-11T00:28:09.506Z"),
        balance: 2409,
        job: Job.QA
    },
    {
        id: 3,
        name: {
            first: "Elsa",
            last: "Vian"
        },
        birthDate: new Date ("2004-07-16T11:13:58.009Z"),
        balance: 3897,
        job: Job.MANAGER
    },
    {
        id: 4,
        name: {
            first: "Blandine",
            last: "Chevalier"
        },
        birthDate: new Date ("1972-09-30T11:35:27.102Z"),
        balance: 1546,
        job: Job.MANAGER
    },
    {
        id: 5,
        name: {
            first: "Solenne",
            last: "Marcelin"
        },
        birthDate: new Date ("1996-03-10T12:57:15.255Z"),
        balance: 4155,
        job: Job.QA
    },
    {
        id: 6,
        name: {
            first: "Raymond",
            last: "Vacon"
        },
        birthDate: new Date ("1995-09-15T16:58:39.064Z"),
        balance: 4629,
        job: Job.QA
    },
    {
        id: 7,
        name: {
            first: "Cedric",
            last: "Robin"
        },
        birthDate: new Date ("2004-03-02T17:04:19.788Z"),
        balance: 777,
        job: Job.QA
    },
    {
        id: 8,
        name: {
            first: "Charlie",
            last: "Albert"
        },
        birthDate: new Date ("2019-11-17T09:58:21.161Z"),
        balance: 2986,
        job: Job.QA
    },
    {
        id: 9,
        name: {
            first: "Boris",
            last: "Vian"
        },
        birthDate: new Date ("2011-08-12T02:46:37.515Z"),
        balance: 3708,
        job: Job.MANAGER
    },
    {
        id: 10,
        name: {
            first: "Boris",
            last: "Leponge"
        },
        birthDate: new Date ("2012-01-27T16:08:50.996Z"),
        balance: 1392,
        job: Job.MANAGER
    },
    {
        id: 11,
        name: {
            first: "Boris",
            last: "Robin"
        },
        birthDate: new Date ("1971-02-09T05:32:22.837Z"),
        balance: 3599,
        job: Job.DEV
    },
    {
        id: 12,
        name: {
            first: "Antoine",
            last: "Verton"
        },
        birthDate: new Date ("2000-07-19T16:37:36.271Z"),
        balance: 4320,
        job: Job.QA
    },
    {
        id: 13,
        name: {
            first: "Olivier",
            last: "Romus"
        },
        birthDate: new Date ("1996-06-08T03:31:24.688Z"),
        balance: 3962,
        job: Job.DEV
    },
    {
        id: 14,
        name: {
            first: "Blandine",
            last: "Giroux"
        },
        birthDate: new Date ("2009-06-25T20:39:22.324Z"),
        balance: 4414,
        job: Job.DEV
    },
    {
        id: 15,
        name: {
            first: "Nicolas",
            last: "Bertin"
        },
        birthDate: new Date ("1999-06-11T23:46:40.998Z"),
        balance: 2763,
        job: Job.MANAGER
    },
    {
        id: 16,
        name: {
            first: "Cedric",
            last: "Renard"
        },
        birthDate: new Date ("1983-06-30T22:45:34.409Z"),
        balance: 567,
        job: Job.MANAGER
    },
    {
        id: 17,
        name: {
            first: "Alice",
            last: "Blasec"
        },
        birthDate: new Date ("1991-04-01T19:30:17.833Z"),
        balance: 4579,
        job: Job.MANAGER
    },
    {
        id: 18,
        name: {
            first: "Alice",
            last: "Robin"
        },
        birthDate: new Date ("1981-12-21T10:48:03.312Z"),
        balance: 4524,
        job: Job.DEV
    },
    {
        id: 19,
        name: {
            first: "Blandine",
            last: "Dupont"
        },
        birthDate: new Date ("1979-01-07T05:33:56.987Z"),
        balance: 2093,
        job: Job.MANAGER
    },
    {
        id: 20,
        name: {
            first: "Antoine",
            last: "Albert"
        },
        birthDate: new Date ("1972-10-21T16:51:10.440Z"),
        balance: 898,
        job: Job.DEV
    },
    {
        id: 21,
        name: {
            first: "Bob",
            last: "Bertin"
        },
        birthDate: new Date ("1998-10-11T23:57:34.525Z"),
        balance: 4987,
        job: Job.MANAGER
    },
    {
        id: 22,
        name: {
            first: "Camille",
            last: "Jourdin"
        },
        birthDate: new Date ("1979-04-10T05:01:17.632Z"),
        balance: 3526,
        job: Job.QA
    },
    {
        id: 23,
        name: {
            first: "Camille",
            last: "Cassare"
        },
        birthDate: new Date ("1974-01-06T23:31:18.884Z"),
        balance: 235,
        job: Job.MANAGER
    },
    {
        id: 24,
        name: {
            first: "Solenne",
            last: "Jourdin"
        },
        birthDate: new Date ("2000-11-07T05:11:08.820Z"),
        balance: 88,
        job: Job.MANAGER
    },
    {
        id: 25,
        name: {
            first: "Boris",
            last: "Dupraz"
        },
        birthDate: new Date ("2001-07-14T18:03:44.374Z"),
        balance: 4549,
        job: Job.MANAGER
    },
    {
        id: 26,
        name: {
            first: "Charlie",
            last: "Albert"
        },
        birthDate: new Date ("2007-05-20T02:29:21.942Z"),
        balance: 576,
        job: Job.QA
    },
    {
        id: 27,
        name: {
            first: "Bob",
            last: "Marcelin"
        },
        birthDate: new Date ("1983-09-25T23:17:34.888Z"),
        balance: 563,
        job: Job.DEV
    },
    {
        id: 28,
        name: {
            first: "Laurent",
            last: "Jourdin"
        },
        birthDate: new Date ("2005-07-18T06:44:12.003Z"),
        balance: 1481,
        job: Job.DEV
    },
    {
        id: 29,
        name: {
            first: "Nicolas",
            last: "Chevalier"
        },
        birthDate: new Date ("2013-03-22T13:11:11.308Z"),
        balance: 2527,
        job: Job.MANAGER
    },
    {
        id: 30,
        name: {
            first: "Olivier",
            last: "Lazarus"
        },
        birthDate: new Date ("2002-02-06T04:07:42.984Z"),
        balance: 4823,
        job: Job.MANAGER
    },
    {
        id: 31,
        name: {
            first: "Benjamin",
            last: "Dupont"
        },
        birthDate: new Date ("1994-05-08T05:25:30.339Z"),
        balance: 2616,
        job: Job.QA
    },
    {
        id: 32,
        name: {
            first: "Alice",
            last: "Cassare"
        },
        birthDate: new Date ("1995-07-02T10:40:48.150Z"),
        balance: 3237,
        job: Job.QA
    }
];

