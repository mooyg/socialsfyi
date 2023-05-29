import { IsNotEmpty, IsString } from 'class-validator'

export class PaymentRequestDto {
  @IsString()
  @IsNotEmpty()
  userId: string

  @IsString()
  @IsNotEmpty()
  currency: string
}
export interface Product {
  id: string
  title: string
  price: number
}
