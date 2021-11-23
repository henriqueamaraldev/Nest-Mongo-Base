import { PartialType } from '@nestjs/mapped-types'
import { IsString } from 'class-validator'
import { Student } from '../entities/student.entity'

export class CreateStudentsDto {
    @IsString()
    name: string

    @IsString()
    teacherId: string
}

export class UpdateStudentsDto extends PartialType(CreateStudentsDto) { }

export class StudentViewDto {
    name: string
    teacherId: string
    elapsedTime: string
}

export function getStudentsView(rawStudents: Student[]): StudentViewDto[] {
    return rawStudents.map(({ created_at, teacherId, name }) => ({
        name,
        teacherId,
        elapsedTime: `Days: ${Math.trunc((new Date().getTime() - created_at.getTime()) / 86400000)}, Hours: ${Math.trunc((new Date().getTime() - created_at.getTime()) / 3600000)}`
    }))
}

export function getStudentView(rawStudent: Student) {
    let studentView: StudentViewDto = {
        name: rawStudent.name,
        teacherId: rawStudent.teacherId,
        elapsedTime: `Days: ${Math.trunc((new Date().getTime() - rawStudent.created_at.getTime()) / 86400000)}, Hours: ${Math.trunc((new Date().getTime() - rawStudent.created_at.getTime()) / 3600000)}`
    }
    return studentView
}