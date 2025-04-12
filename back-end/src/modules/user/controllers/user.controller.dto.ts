import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ICreateUserUsecaseDTO {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  whatsapp_number!: string;

  @IsNotEmpty()
  instagram!: string;

  @IsNotEmpty()
  birth_date!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;
}
