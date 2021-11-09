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
    dateOfBirth?: Date | string;
    address?: Address;
    role?: Roles;
    username?: string;
    profilePhotoUrl?: string;
    companies?: Companies[];
    gender?: Gender;
}

