import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  ICreateUserInput,
  IUserService,
} from './use-cases/user.service.interface';
import { User } from './entities/user.entity'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  private readonly saltRounds = 10;

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }
  async validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
  async createUser(input: ICreateUserInput) {
    const user = this.userRepository.create(input);
    await this.userRepository.save(user);

    return {
      ...user,
     password: undefined,
    };
  }
}
