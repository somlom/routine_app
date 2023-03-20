import { Injectable } from '@nestjs/common';
import { TaskDto } from './interfaces/taskDto';

@Injectable()
export class AppService {
  getTasks(): string {
    return 'Hello World!';
  }

  getTask(task: string): string {
    return task;
  }

  createTask(taskDto: TaskDto): TaskDto {
    return taskDto;
  }

  updateTask(taskDto: TaskDto): TaskDto {
    return taskDto;
  }

  deleteTask(task: string): string {
    return task;
  }
}
