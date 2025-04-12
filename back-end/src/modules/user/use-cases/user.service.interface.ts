export interface ICreateUserInput {
  name: string;
  email: string;
}

export interface IUserService {
  createUser(input: ICreateUserInput): Promise<any>;
  hashPassword(password: string): Promise<string>;
  validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
}
