import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentsDto, UpdateStudentsDto } from './dto/students.dto';
import { Student, StudentDocument } from './entities/student.entity';

@Injectable()
export class StudentService {
    constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) { }

    create(inputStudent: CreateStudentsDto) {
        const student = new this.studentModel(inputStudent);
        return student.save();
    }

    findAll() {
        return this.studentModel.find();
    }

    findById(id: string) {
        return this.studentModel.findById(id);
    }

    updateStudentById(id: string, inputStudent: UpdateStudentsDto) {
        return this.studentModel.findByIdAndUpdate({
            _id: id,
        },
            {
                $set: inputStudent,
            },
            {
                new: true,
            }
        )
    }

    findByTeacher(teacherIdInput: string) {
        return this.studentModel.find({ teacherId: teacherIdInput })
    }
}
