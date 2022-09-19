import { TasksService } from './tasks.service';
import { Controller, Get, Post } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  private tasks: Task[] = [];

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}
