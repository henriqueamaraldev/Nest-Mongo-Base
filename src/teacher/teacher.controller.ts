import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTeacherDto, UpdateTeacherDto } from './dto/create-teacher.dto';
import { TeacherServices } from './teacher.service';

@Controller('teachers')
export class TeacherControllers {
  constructor(private readonly teacherServices: TeacherServices) {}

  @Get()
  async getAllTeachers() {
    return await this.teacherServices.findAll();
  }

  @Get('/:teacherId')
  async getTeacherById(@Param('teacherId') teacherId: string) {
    return this.teacherServices.findOne(teacherId);
  }

  @Post()
  createTeacher(@Body() teacherInput: CreateTeacherDto) {
    return this.teacherServices.create(teacherInput);
  }

  @Patch('/:teacherId')
  updateTeacher(
    @Param('teacherId') teacherId: string,
    @Body() updateTeacherInput: UpdateTeacherDto
  ) {
    return this.teacherServices.updateById(teacherId, updateTeacherInput);
  }
}
