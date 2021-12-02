import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeacherDocument = Teacher & Document;

@Schema()
export class Teacher {

    @Prop({ required: true, unique: true })
    name: string

    @Prop()
    createdAt: Date

    @Prop()
    updatedAt: Date

    @Prop({ default: null })
    subject?: string

}

export const TeacherSchema = SchemaFactory.createForClass(Teacher).set(
    'timestamps',
    true,
)