import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from '../student/entities/student.entity';
import { StudentControllers } from '../student/student.controller';
import { StudentServices } from '../student/student.service';
import { Teacher, TeacherSchema } from '../teacher/entities/teacher.entity';
import { TeacherControllers } from '../teacher/teacher.controller';
import { TeacherServices } from '../teacher/teacher.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODBLINK),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }, { name: Teacher.name, schema: TeacherSchema }])
  ],
  controllers: [StudentControllers, TeacherControllers],
  providers: [StudentServices, TeacherServices],
})
export class AppModule { }
