import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTeacherDto } from './dto/teachers.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) { }

    @Get()
    getTeachers() {
        return this.teacherService.findAllTeachers()
    }

    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId') teacherId: string
    ) {
        return this.teacherService.findById(teacherId)
    }

    @Post()
    createTeacher(
        @Body() teacherInput: CreateTeacherDto
    ) {
        return this.teacherService.create(teacherInput)
    }
}
