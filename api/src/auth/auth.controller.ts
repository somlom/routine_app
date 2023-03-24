import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { User, UserDto } from '../interfaces/user';

@Controller('/auth')
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @Post('/login')
    async login(@Body() dto: UserDto): Promise<object> {
        return await this.service.login(dto);
    }

    @Post('/register')
    register(@Body() dto: UserDto): Promise<User> {
        return this.service.register(dto);
    }
}
