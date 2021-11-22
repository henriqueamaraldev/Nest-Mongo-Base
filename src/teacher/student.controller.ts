import { Controller, Get, Param } from '@nestjs/common';
import { StudentService } from '../student/student.service';


@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    getStudents(
        @Param('teacherId') teacherId: string
    ) {
        return this.studentService.findByTeacher(teacherId)
    }
}
