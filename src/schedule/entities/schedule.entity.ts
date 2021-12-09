import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ScheduleDocument = Schedule & Document;

@Schema()
export class Schedule {
  @Prop()
  classDate: Date;

  @Prop({ ref: 'Teacher' })
  teacher: string;

  @Prop({ ref: 'Student' })
  student: string;

  @Prop()
  subject: string;

  @Prop()
  value: number;

  @Prop()
  environment: string;

  @Prop()
  address?: string;

  @Prop()
  link?: string;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule).set(
  'timestamps',
  true,
);
