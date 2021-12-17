import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentServices } from '../student/student.service';
import { TeacherServices } from '../teacher/teacher.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule, ScheduleDocument } from './entities/schedule.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(Schedule.name) private scheduleModel: Model<ScheduleDocument>,
    private studentServices: StudentServices,
    private teacherServices: TeacherServices
  ) { }

  async create(inputSchedule: CreateScheduleDto) {

    const { classDate, teacher, student } = inputSchedule
    if (classDate <= new Date()) {
      throw new Error("you can't schedule a class for the past")
    }

    try {
      await this.teacherServices.findOne(teacher)
      await this.studentServices.findOne(student)
    } catch (error) {

    }
    
    let modelSchedule = new this.scheduleModel(inputSchedule);
    const schedule = await modelSchedule.save()

    return schedule
  }

  findAll() {
    return this.scheduleModel.find().populate('teacher', 'name').populate('student', 'name')
  }

  findOne(scheduleId: string) {
    return this.scheduleModel.findById(scheduleId);
  }

  updateScheduleById(scheduleId: string, inputSchedule: UpdateScheduleDto) {
    return this.scheduleModel.findByIdAndUpdate({
      _id: scheduleId,
    },
      {
        $set: inputSchedule,
      }
    )
  }

  findByTeacher(teacherId: string) {
    return this.scheduleModel.find({ teacher: teacherId })
  }

  findByStudent(studentId: string) {
    return this.scheduleModel.find({ student: studentId })
  }

  remove(scheduleId: string) {
    return `This action removes a #${scheduleId} schedule`;
  }
}
