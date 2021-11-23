import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type TeacherDocument = Teacher & Document;

@Schema()
export class Teacher {

    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    subject?: string;

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

export const TeacherSchema = SchemaFactory.createForClass(Teacher);