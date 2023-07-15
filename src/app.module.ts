import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

/*
- A module in NestJS represents a cohesive block of the application, organizing related components such as controllers, services, and other modules. It acts as a container for different parts of the application, providing a way to group and encapsulate related functionality.
Modules are created using the @Module() decorator in NestJS, and they define the providers, controllers, and other modules that belong to the module. Providers include services and other dependencies required by the module. Controllers and modules can be imported into other modules to establish dependencies and enable communication between different parts of the application.

- Modules are crucial for keeping the application structure modular and maintainable. They help manage the application's complexity, enable reusability, and provide a clear organization of components.
*/

@Module({
  imports: [CoffeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
