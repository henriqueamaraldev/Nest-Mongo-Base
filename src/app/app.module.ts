import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from '../student/entities/student.entity';
import { StudentController } from '../student/student.controller';
import { StudentService } from '../student/student.service';
import { Teacher, TeacherSchema } from '../teacher/entities/teacher.entity';
import { StudentTeacherController } from '../teacher/student.controller';
import { TeacherController } from '../teacher/teacher.controller';
import { TeacherService } from '../teacher/teacher.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODBLINK),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }, { name: Teacher.name, schema: TeacherSchema }])
  ],
  controllers: [StudentController, TeacherController, StudentTeacherController],
  providers: [StudentService, TeacherService],
})
export class AppModule { }
