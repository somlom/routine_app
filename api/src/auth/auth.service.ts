import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { UserDto } from '../interfaces/user';
import { User } from 'src/interfaces/user';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<User>
    ) {}

    async login(userDto: UserDto): Promise<object> {
        const user = await this.userModel.findOne({ email: userDto.email });
        if (user) {
            return user;
        } else {
            throw new HttpException('Wrong creditals', HttpStatus.BAD_REQUEST);
        }
    }

    async register(userDto: UserDto): Promise<User> {
        const user = await this.userModel.findOne({ email: userDto.email });
        if (!user) {
            return user;
        } else {
            throw new HttpException(
                'Choose other e-mail',
                HttpStatus.BAD_REQUEST
            );
        }
    }

    async reset(userDto: UserDto): Promise<User> {
        // deepcode ignore JavascriptDeadCode: <please specify a reason of ignoring this>
        return await this.userModel.findOne({ email: userDto.email });
    }

    logout(userDto: UserDto): UserDto {
        return userDto;
    }

    deleteTask(task: string): string {
        return task;
    }
}
