import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from './entities/teacher.entity';
import { TeacherControllers } from './teacher.controller';
import { TeacherServices } from './teacher.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }])],
    controllers: [TeacherControllers],
    providers: [TeacherServices],
    exports: [TeacherServices],
})
export class TeacherModule { }
