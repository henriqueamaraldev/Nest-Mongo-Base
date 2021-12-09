import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
  @Prop()
  billingDate: Date;

  @Prop({ ref: 'Schedule' })
  schedule: string;

  @Prop()
  cnpj: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment).set(
  'timestamps',
  true,
);
