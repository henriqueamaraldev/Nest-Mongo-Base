import { Body, ClassSerializerInterceptor, Controller, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { CreateTeacherDto, getTeachersView, getTeacherView, UpdateTeacherDto } from './dto/teachers.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    async getTeachers() {
        let rawTeachers: any = await this.teacherService.findAllTeachers()
        return getTeachersView(rawTeachers)
    }

    @Get('/:teacherId')
    async getTeacherById(
        @Param('teacherId') teacherId: string
    ) {
        let rawTeacher = await this.teacherService.findById(teacherId)
        return getTeacherView(rawTeacher)
    }

    @Post()
    createTeacher(
        @Body() teacherInput: CreateTeacherDto
    ) {
        return this.teacherService.create(teacherInput)
    }

    @Patch('/:teacherId')
    updateTeacher(
        @Param('teacherId') teacherId: string,
        @Body() body: UpdateTeacherDto
    ) {
        return this.teacherService.updateTeacherById(teacherId, body)
    }
}
