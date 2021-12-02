import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateStudentsDto, UpdateStudentsDto } from './dto/create-student.dto';
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

        return this.studentServices.findOne(studentId)
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

        return this.studentServices.updateById(id, UpdateStudentInput)
    }
}