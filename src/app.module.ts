import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { HeroesGameModule } from './heroes-game/heroes-game.module';

@Module({
  imports: [CqrsModule.forRoot(), HeroesGameModule],
})
export class AppModule {}
