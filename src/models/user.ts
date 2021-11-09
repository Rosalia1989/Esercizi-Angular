export interface Address {
    city: string;
    street: string;
    postalCode: string;
}

export enum Roles {
    Staff = 'staff',
    Student = 'student',
    Manager = 'manager',
    Admin = 'admin'
};

export interface Companies {
    id: number;
    name: string;
    description: string;
    location: Address;
}

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
};

export interface User {
    id?: number;
    name: string;
    surname: string;
    age?: number;
    dateOfBirth?: string;
    address?: Address;
    role?: Roles;
    username?: string;
    profilePhotoUrl?: string;
    companies?: Companies[];
    gender?: Gender;
}

const user : User = {
    id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 30,
    dateOfBirth: '14/12/1995',
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    },
    role: Roles.Staff,
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [{
            id: 148979,
            name: 'Develhope',
            description: 'La migliore',
            location: {
                city: 'Palermo',
                street: 'Via Libertà 58',
                postalCode: '90139'
            }
        },
        {
            id: 123123,
            name: 'Apple',
            description: 'E insomma...',
            location: {
                city: 'Cupertino',
                street: 'One Apple Park Way',
                postalCode: '95014'
            }
        }
    ],
    gender: Gender.Male
}