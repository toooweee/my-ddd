import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { CreateTaskHandler } from './handlers/create-task.handler';

@Module({
  controllers: [TaskController],
  providers: [CreateTaskHandler],
})
export class TaskModule {}
