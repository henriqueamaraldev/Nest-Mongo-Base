import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateStudentsDto, UpdateStudentsDto } from './dto/students.dto';
import { StudentService } from './student.service';
@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    getStudents() {
        return this.studentService.findAll();
    }

    @Get('/:studentId')
    getStudentById(@Param('studentId') studentId: string) {
        return this.studentService.findById(studentId)
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
        @Body() body: UpdateStudentsDto
    ) {
        return this.studentService.updateStudentById(id, body)
    }
}