import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeacherDto } from './dto/teachers.dto';
import { Teacher, TeacherDocument } from './entities/teacher.entity';


@Injectable()
export class TeacherService {
    constructor(@InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>) { }

    create(inputTeacher: CreateTeacherDto) {
        const teacher = new this.teacherModel(inputTeacher);
        return teacher.save();
    }

    findAllTeachers() {
        return this.teacherModel.find()
    }

    findById(teacherId: string) {
        return this.teacherModel.findById(teacherId)
    }
}
