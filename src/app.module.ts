import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TaskModule } from './task/task.module';

@Module({
  imports: [CqrsModule.forRoot(), TaskModule],
})
export class AppModule {}
