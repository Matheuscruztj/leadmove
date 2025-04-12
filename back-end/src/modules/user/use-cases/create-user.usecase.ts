import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from './user.service.interface';

export interface ICreateUserUsecaseInput {
  name: string;
  email: string;
  whatsapp_number: string;
  instagram: string;
  birth_date: string;
  password: string;
}

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('IUserService') private readonly userService: IUserService,
  ) {}

  async execute(input: ICreateUserUsecaseInput) {
    console.log('ok')
    const newInput = {
      ...input,
    }

    const auxPass = await this.userService.hashPassword(input.password);

    newInput.password = await auxPass;

    console.log(newInput);

    return await this.userService.createUser(newInput);
  }
}
