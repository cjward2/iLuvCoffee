import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/* Controllers are where specific requests are handled by your application.
-A controller in NestJS acts as an intermediary between incoming requests and outgoing responses. It receives HTTP requests, processes them, and returns an HTTP response to the client. Controllers are responsible for handling routing, parsing request data, and invoking the appropriate service methods to perform the requested actions.
Controllers are decorated with the @Controller() decorator in NestJS, and individual routes within a controller are defined using decorators such as @Get(), @Post(), @Put(), etc. These decorators specify the HTTP method and the route path that the controller method should handle.

- Controllers use dependency injection to access the services they require. By injecting the appropriate service instances into the controller's constructor, you can access the service methods and utilize their functionality within the controller actions.
*/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
