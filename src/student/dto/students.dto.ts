import { PartialType } from '@nestjs/mapped-types'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateStudentsDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    teacherId: string
}

export class UpdateStudentsDto extends PartialType(CreateStudentsDto) { }

/* export class StudentViewDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    teacherId: string

    @IsString()
    @IsNotEmpty()
    elapsedTime: string
}

function DateToElapsedDays(inputDate) {
    return Math.trunc((new Date().getTime() - inputDate.getTime()) / 86400000)

}

function DateToElapsedHours(inputDate) {
    return (Math.trunc((new Date().getTime() - inputDate.getTime()) / 3600000) % 24)
}

export function getStudentsView(rawStudents: Student[]): StudentViewDto[] {
    return rawStudents.map(({ createdAt, teacherId, name }) => ({
        name,
        teacherId,
        elapsedTime: `Days: ${DateToElapsedDays(createdAt)}, Hours: ${DateToElapsedHours(createdAt)}`
    }))
}

export function getStudentView(rawStudent: Student) {
    let studentView: StudentViewDto = {
        name: rawStudent.name,
        teacherId: rawStudent.teacherId,
        elapsedTime: `Days: ${DateToElapsedDays(rawStudent.createdAt)}, Hours: ${DateToElapsedHours(rawStudent.createdAt)}`
    }
    return studentView
}*/