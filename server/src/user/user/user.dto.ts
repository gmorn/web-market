import { IsEmail, IsPhoneNumber, IsString } from 'class-validator'

export class AuthDto {
  @IsString()
  password: string
  @IsPhoneNumber()
  phoneNumber: string
}

export class RegDto {
  name: string
  phoneNumber: string
  password: string
}