import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type StudentDocument = Student & Document;

@Schema()
export class Student {

    @Prop()
    id: string;

    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ ref: 'Teacher' })
    teacherId: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export const StudentSchema = SchemaFactory.createForClass(Student).set(
    'timestamps',
    true,
);