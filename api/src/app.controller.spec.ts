import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "some"', () => {
      expect(appController.getTask('some')).toStrictEqual('some');
    });
  });

  describe('root', () => {
    it('should return dto', () => {
      expect(
        appController.createTask({
          title: 'string',
          desctiption: 1,
          breed: 'string',
        }),
      ).toStrictEqual({
        title: 'string',
        desctiption: 1,
        breed: 'string',
      });
    });
  });

  describe('root', () => {
    it('should return dto', () => {
      expect(
        appController.updateTask({
          title: 'string',
          desctiption: 1,
          breed: 'string',
        }),
      ).toStrictEqual({
        title: 'string',
        desctiption: 1,
        breed: 'string',
      });
    });
  });

  describe('root', () => {
    it('should return "some"', () => {
      expect(appController.deleteTask('some')).toStrictEqual('some');
    });
  });
});
