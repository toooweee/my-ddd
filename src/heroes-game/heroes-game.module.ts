import { Module } from '@nestjs/common';
import { HeroesGameService } from './heroes-game.service';
import { HeroesGameController } from './heroes-game.controller';

@Module({
  controllers: [HeroesGameController],
  providers: [HeroesGameService],
})
export class HeroesGameModule {}
