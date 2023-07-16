import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { DatabaseModule } from './database/database.module';

/*
- A module in NestJS represents a cohesive block of the application, organizing related components such as controllers, services, and other modules. It acts as a container for different parts of the application, providing a way to group and encapsulate related functionality.
Modules are created using the @Module() decorator in NestJS, and they define the providers, controllers, and other modules that belong to the module. Providers include services and other dependencies required by the module. Controllers and modules can be imported into other modules to establish dependencies and enable communication between different parts of the application.

- Modules are crucial for keeping the application structure modular and maintainable. They help manage the application's complexity, enable reusability, and provide a clear organization of components.
*/

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: 'localhost', // database host
      port: 5432, // database host
      username: 'postgres', // username
      password: 'pass123', // user password
      database: 'postgres', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically
      synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
    }),
    CoffeeRatingModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
