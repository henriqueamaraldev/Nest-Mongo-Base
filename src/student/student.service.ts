import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentsDto, UpdateStudentsDto } from './dto/students.dto';
import { Student, StudentDocument } from './entities/student.entity';

@Injectable()
export class StudentService {
    constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) { }

    async create(inputStudent: CreateStudentsDto) {

        if (!inputStudent.name) {
            throw new Error(`You can't create a nameless student!`)
        }

        let studentCheck = await this.studentModel.findOne({ name: inputStudent.name })
        if (studentCheck) {
            throw new Error(`Student already exists`)
        }

        let createStudent = { created_at: new Date(), updated_at: new Date(), ...inputStudent }
        let student = new this.studentModel(createStudent);
        return student.save();
    }

    findAll() {
        return this.studentModel.find().lean()
    }

    findById(id: string) {
        return this.studentModel.findById(id);
    }

    updateStudentById(id: string, inputStudent: UpdateStudentsDto) {
        let updateStudent = { updated_at: new Date(), ...inputStudent }
        return this.studentModel.findByIdAndUpdate({
            _id: id,
        },
            {
                $set: updateStudent,
            },
            {
                new: true,
            }
        )
    }

    findByTeacher(teacherId: string) {
        return this.studentModel.find({ teacherId: teacherId })
    }
}
