import { Document } from 'mongoose';

export interface User extends Document {
    readonly name: string;
    readonly surname: string;
    readonly email: string;
}

export interface UserDto {
    name?: string;
    surname?: string;
    email: string;
    password: string;
}
