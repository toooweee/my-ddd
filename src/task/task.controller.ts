import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTaskDto } from './dto';
import { CreateTaskCommand } from './commands/create-task.command';

@ApiTags('Tasks')
@Controller('task')
export class TaskController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.commandBus.execute(new CreateTaskCommand(createTaskDto));
  }
}
