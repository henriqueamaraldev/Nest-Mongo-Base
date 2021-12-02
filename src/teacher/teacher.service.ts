import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeacherDto, UpdateTeacherDto } from './dto/create-teacher.dto';
import { Teacher, TeacherDocument } from './entities/teacher.entity';

@Injectable()
export class TeacherServices {
    constructor(
        @InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>
    ) { }

    async create(inputTeacher: CreateTeacherDto) {

        let modelTeacher = new this.teacherModel(inputTeacher)

        return await modelTeacher.save()
    }

    findAll() {
        return this.teacherModel.find()
    }

    async findOne(teacherId: string) {

        return await this.teacherModel.findById(teacherId)
    }

    updateById(id: string, inputTeacher:
        UpdateTeacherDto) {
        return this.teacherModel.findByIdAndUpdate({
            _id: id,
        },
            {
                $set: inputTeacher,
            }
        )
    }
}
