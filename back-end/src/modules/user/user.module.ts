import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserUseCase } from './use-cases/create-user.usecase';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './controllers/user.controller.js';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    {
      provide: 'IUserService',
      useClass: UserService,
    },
    CreateUserUseCase,
  ],
  exports: [],
})
export class UserModule {}
