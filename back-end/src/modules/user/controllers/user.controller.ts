import { Body, Controller, Get, Inject, Injectable, Post, UseGuards } from '@nestjs/common';
import { CreateUserUseCase } from '../use-cases/create-user.usecase';
import { IUserService } from '../use-cases/user.service.interface';
import { ICreateUserUsecaseDTO } from './user.controller.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Injectable()
@Controller('/user')
export class UserController {
  createUserUseCase: any;
  constructor(
    @Inject('IUserService') private readonly userService: IUserService,
  ) {}

  @Post()
  async createUser(@Body() data: ICreateUserUsecaseDTO): Promise<any> {
    const createUserUseCase = new CreateUserUseCase(this.userService);
    return await createUserUseCase.execute(data);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async protectedRoute() {
    return 'This is a protected route';
  }
}
