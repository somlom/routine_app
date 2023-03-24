import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { userProvider } from './auth.provider';
import { databaseProviders } from '../database/database.provider';

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [AuthService, ...userProvider, ...databaseProviders],
})
export class AuthModule {}
