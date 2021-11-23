import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    teacherId: string;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export const StudentSchema = SchemaFactory.createForClass(Student);