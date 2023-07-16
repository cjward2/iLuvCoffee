import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity/event.entity';

class MockCoffeesService {}

/* in modules that arent the main module of app, we use forRoot() on the typeORMModule, otherwise we use .forFeature() */
@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  exports: [CoffeesService],
  controllers: [CoffeesController],
  providers: [{ provide: CoffeesService, useValue: CoffeesService }],
})
export class CoffeesModule {}
