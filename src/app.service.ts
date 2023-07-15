import { Injectable } from '@nestjs/common';

/* A service is where you handle business logic for you app.
- A service in NestJS is a class that encapsulates the business logic of your application. It is responsible for handling complex operations, interacting with databases, external APIs, or performing any other data manipulation required by your application. Services are typically designed to be reusable and can be injected into controllers or other services using dependency injection.

- Services can be created using the @Injectable() decorator provided by NestJS, which allows them to be managed by the NestJS dependency injection system. This makes it easier to maintain and test the application by separating the business logic into independent, reusable units.
*/
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
}
