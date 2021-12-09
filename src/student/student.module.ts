import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherModule } from '../teacher/teacher.module';
import { Student, StudentSchema } from './entities/student.entity';
import { StudentControllers } from './student.controller';
import { StudentServices } from './student.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]), TeacherModule],
    controllers: [StudentControllers],
    providers: [StudentServices],
    exports: [StudentServices],
})
export class StudentModule { }
