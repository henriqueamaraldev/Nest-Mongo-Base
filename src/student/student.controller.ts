import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateStudentsDto, getStudentsView, getStudentView, UpdateStudentsDto } from './dto/students.dto';
import { StudentService } from './student.service';
@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    async getStudents() {
        let rawStudents = await this.studentService.findAll()
        return getStudentsView(rawStudents)
    }

    @Get('/:studentId')
    async getStudentById(@Param('studentId') studentId: string) {
        let rawStudent = await this.studentService.findById(studentId)
        return getStudentView(rawStudent)
    }

    @Post()
    createStudent(
        @Body() studentInput: CreateStudentsDto
    ) {
        return this.studentService.create(studentInput)
    }

    @Patch('/:studentId')
    updateStudentById(
        @Param('studentId') id: string,
        @Body() UpdateStudentInput: UpdateStudentsDto
    ) {
        return this.studentService.updateStudentById(id, UpdateStudentInput)
    }
}