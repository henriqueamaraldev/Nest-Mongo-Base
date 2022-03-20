import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ok } from '../utils/helpers/http-helper';
import { CreateStudentsDto, UpdateStudentsDto } from './models/dto/create-student.dto';
import { Student, StudentDocument } from './models/entities/student.entity';

@Injectable()
export class StudentServices {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>
  ) {}

  async create(inputStudent: CreateStudentsDto) {
    const modelStudent = new this.studentModel(inputStudent);
    const account = await modelStudent.save();
    return ok(account);
  }

  findAll() {
    return this.studentModel.find();
  }

  async findOne(studentId: string) {
    return await this.studentModel.findById(studentId);
  }

  updateById(id: string, inputStudent: UpdateStudentsDto) {
    return this.studentModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: inputStudent,
      }
    );
  }
}
