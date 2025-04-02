import { Controller, Get, Injectable } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './db/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
@Controller()
export class AppController {
  constructor(
    // @InjectRepository(User)
    // private userRepository: Repository<User>,
    private readonly appService: AppService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    // const a = await this.userRepository.find();
    // console.log('aaa', JSON.stringify(a));
    return this.appService.getHello();
  }
}
