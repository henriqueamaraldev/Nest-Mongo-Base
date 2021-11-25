import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentServices } from 'src/student/student.service';
import { CreateTeacherDto, UpdateTeacherDto } from './dto/teachers.dto';
import { Teacher, TeacherDocument } from './entities/teacher.entity';


@Injectable()
export class TeacherServices {
    constructor(
        @InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>,
        private studentServices: StudentServices
    ) { }

    async create(inputTeacher: CreateTeacherDto) {
        const teacher = await new this.teacherModel(inputTeacher);
        return teacher.save();
    }

    async findAll(): Promise<Teacher[]> {
        return await this.teacherModel.find().lean()
    }

    async findById(teacherId: string) {
        let teacher = await this.teacherModel.findById(teacherId).lean()
        let students = await this.studentServices.findByTeacher(teacherId).select({ name: 1, _id: 0 })
        return { ...teacher, students }
    }

    updateTeacherById(id: string, inputTeacher: UpdateTeacherDto) {
        return this.teacherModel.findByIdAndUpdate({
            _id: id,
        },
            {
                $set: inputTeacher,
            },
            {
                new: true,
            }
        )
    }
}
