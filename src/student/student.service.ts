import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateStudentsDto, UpdateStudentsDto } from './dto/create-student.dto'
import { Student, StudentDocument } from './entities/student.entity'

@Injectable()
export class StudentServices {
    constructor(
        @InjectModel(Student.name) private studentModel: Model<StudentDocument>
    ) { }

    async create(inputStudent: CreateStudentsDto) {

        let modelStudent = new this.studentModel(inputStudent)

        return await modelStudent.save()
    }

    findAll() {

        return this.studentModel.find()
    }

    async findOne(studentId: string) {

        return await this.studentModel.findById(studentId);
    }

    updateById(id: string, inputStudent: UpdateStudentsDto) {

        return this.studentModel.findByIdAndUpdate({
            _id: id,
        },
            {
                $set: inputStudent,
            }
        )
    }

}
