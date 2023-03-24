import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TaskDto } from './interfaces/taskDto';

@Controller(['/tasks', '/'])
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getTasks(): string {
        return this.appService.getTasks();
    }

    @Get(':id')
    getTask(@Param('id') id: string): string {
        return this.appService.getTask(id);
    }

    @Post()
    createTask(@Body() taskDto: TaskDto): TaskDto {
        return this.appService.createTask(taskDto);
    }

    @Put(':id')
    updateTask(@Body() taskDto: TaskDto): TaskDto {
        return this.appService.updateTask(taskDto);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string): string {
        return this.appService.deleteTask(id);
    }
}
