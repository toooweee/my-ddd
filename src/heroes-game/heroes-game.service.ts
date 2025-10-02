import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class HeroesGameService {
  constructor(private readonly commandBus: CommandBus) {}
}
