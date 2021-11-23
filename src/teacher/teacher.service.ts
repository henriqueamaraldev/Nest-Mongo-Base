import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeacherDto, UpdateTeacherDto } from './dto/teachers.dto';
import { Teacher, TeacherDocument } from './entities/teacher.entity';


@Injectable()
export class TeacherService {
    constructor(@InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>) { }

    async create(inputTeacher: CreateTeacherDto) {
        if (!inputTeacher.name) {
            throw new Error(`You can't create a nameless teacher!`)
        }

        let teacherCheck = await this.teacherModel.findOne({ name: inputTeacher.name })
        if (teacherCheck) {
            throw new Error(`Teacher with this name already exists`)
        }

        let createTeacher = { created_at: new Date(), updated_at: new Date(), ...inputTeacher }
        const teacher = new this.teacherModel(createTeacher);
        return teacher.save();
    }

    async findAllTeachers(): Promise<Teacher[]> {
        return await this.teacherModel.find().lean()
    }

    findById(teacherId: string) {
        return this.teacherModel.findById(teacherId)
    }

    updateTeacherById(id: string, inputTeacher: UpdateTeacherDto) {
        let updateTeacher = { updated_at: new Date(), ...inputTeacher }
        return this.teacherModel.findByIdAndUpdate({
            _id: id,
        },
            {
                $set: updateTeacher,
            },
            {
                new: true,
            }
        )
    }
}
