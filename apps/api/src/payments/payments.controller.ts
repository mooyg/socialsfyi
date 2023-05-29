import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { PaymentsService } from './payments.service'
import { AuthenticatedGuard } from 'src/auth/guards/is-authenticated.guard'
import { PaymentRequestDto } from './dto/payment-request.dto'

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @UseGuards(AuthenticatedGuard)
  createPayments(@Body() paymentRequestDto: PaymentRequestDto) {}
}
