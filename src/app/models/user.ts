export enum Role {
    Staff = 'staff',
    Student = 'student',
    Manager = 'manager',
    Admin = 'admin'
}

export interface Company {
    id: number;
    name: string;
    description: string;
    location: Address;
}

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

export interface User {
    id?: number;
    name: string;
    surname: string;
    age?: number;
    dateOfBirth?: Date | string;
    address?: Address;
    role?: Role;
    username?: string;
    profilePhotoUrl?: string;
    companies?: Company[];
    gender?: Gender;
}

interface Address {
    city: string;
    street: string;
    postalCode: string;
}