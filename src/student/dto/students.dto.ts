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


/*
export function getTeachersView(rawTeachers: Teacher[]) {
    return rawTeachers.map(({ createdAt, name, subject }) => ({
        name,
        subject,
        elapsedTime: DateToElapsedTime(createdAt)
    }))
}

export function getTeacherView(rawTeacher: Teacher) {
    let teacherView: teacherViewDto = {
        name: rawTeacher.name,
        subject: rawTeacher.subject,
        elapsedTime: DateToElapsedTime(rawTeacher.createdAt)
    }
    return teacherView
}

function DateToElapsedTime(createdDate: Date) {
    return `Days: ${dateToElapsedDays(createdDate)}, Hours: ${dateToElapsedHours(createdDate)}`
}

function dateToElapsedHours(createdDate: Date) {
    return (dateToElapsedDays(createdDate) % 24)
}

function dateToElapsedDays(createdDate: Date) {
    return Math.trunc((new Date().getTime() - createdDate.getTime()) / 86400000)

}
*/