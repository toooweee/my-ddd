import { Controller, Get } from '@nestjs/common';
import { HeroesGameService } from './heroes-game.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('heroes-game')
@Controller('heroes-game')
export class HeroesGameController {
  constructor(private readonly heroesGameService: HeroesGameService) {}

  @Get()
  findAll() {}
}
