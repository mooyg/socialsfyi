import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma'
import { PaymentRequestDto } from './dto/payment-request.dto'
import Stripe from 'stripe'

@Injectable()
export class PaymentsService {
  private stripe: Stripe
  constructor(private readonly _prisma: PrismaService) {
    this.stripe = new Stripe(process.env.STRIPE_API_KEY, {
      apiVersion: '2022-11-15',
    })
  }

  async createPayments(paymentRequestDto: PaymentRequestDto) {
    return this.stripe.paymentIntents.create({
      amount: 10,
      currency: '$',
    })
  }
}
