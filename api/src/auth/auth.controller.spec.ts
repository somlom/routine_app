import { Test, TestingModule } from '@nestjs/testing';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from '../database/database.module';
import { userProvider } from './auth.provider';

describe('AuthController', () => {
    let authController: AuthController;

    beforeEach(async () => {
        const auth: TestingModule = await Test.createTestingModule({
            imports: [DatabaseModule],
            controllers: [AuthController],
            providers: [AuthService, ...userProvider],
        }).compile();

        authController = auth.get<AuthController>(AuthController);
    });

    describe('root', () => {
        it('should return error', () => {
            const res = expect(
                authController.login({
                    email: 'email',
                    // deepcode ignore NoHardcodedPasswords: <please specify a reason of ignoring this>
                    password: 'password',
                })
            );
            res.rejects.toThrow('Wrong creditals');
        });
    });

    describe('root', () => {
        it('should return done', () => {
            const res = expect(
                authController.login({
                    email: 'supersnus1331@gmail.com',
                    // deepcode ignore NoHardcodedPasswords: <please specify a reason of ignoring this>
                    password: 'password',
                })
            );
            // res.rejects.toThrow('Wrong creditals');
            res.resolves.toContain('email');
        });
    });
});
