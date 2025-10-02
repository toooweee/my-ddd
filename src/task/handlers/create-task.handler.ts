import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../commands/create-task.command';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  async execute(command: CreateTaskCommand) {
    const newTask = {
      id: Date.now(),
      ...command,
    };

    console.log(newTask);

    return {
      id: newTask.id,
    };
  }
}
