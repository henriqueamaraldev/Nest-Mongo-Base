import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateStudentsDto, UpdateStudentsDto } from './dto/students.dto';
import { StudentServices } from './student.service';
@Controller('students')
export class StudentControllers {
    constructor(private readonly studentServices: StudentServices) { }

    @Get()
    getAllStudents() {
        return this.studentServices.findAll()
    }

    @Get('/:studentId')
    getStudentById(@Param('studentId') studentId: string) {
        return this.studentServices.findById(studentId)
    }

    @Post()
    createStudent(
        @Body() studentInput: CreateStudentsDto
    ) {
        return this.studentServices.create(studentInput)
    }

    @Patch('/:studentId')
    updateStudent(
        @Param('studentId') id: string,
        @Body() UpdateStudentInput: UpdateStudentsDto
    ) {
        return this.studentServices.updateStudentById(id, UpdateStudentInput)
    }

    @Get('/teacher/:teacherId')
    getStudentsByTeacherId(
        @Param('teacherId') teacherId: string
    ) {
        return this.studentServices.findByTeacher(teacherId)
    }
}