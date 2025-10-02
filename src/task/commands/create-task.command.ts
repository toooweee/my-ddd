import { Command } from '@nestjs/cqrs';
import { CreateTaskDto } from '../dto';

export class CreateTaskCommand extends Command<{ id: number }> {
  constructor(public readonly dto: CreateTaskDto) {
    super();
  }
}
