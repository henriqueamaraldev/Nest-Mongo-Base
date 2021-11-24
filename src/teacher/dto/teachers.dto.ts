import { PartialType } from "@nestjs/mapped-types"
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateTeacherDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsOptional()
    subject?: string
}

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) { }

/* export interface teacherViewDto {
    name: string
    subject: string
    elapsedTime: string
}

function DateToElapsedDays(inputDate) {
    return Math.trunc((new Date().getTime() - inputDate.getTime()) / 86400000)

}

function DateToElapsedHours(inputDate) {
    return (Math.trunc((new Date().getTime() - inputDate.getTime()) / 3600000) % 24)
}

export function getTeachersView(rawTeachers: Teacher[]) {
    return rawTeachers.map(({ createdAt, name, subject }) => ({
        name,
        subject,
        elapsedTime: `Days: ${DateToElapsedDays(createdAt)}, Hours: ${DateToElapsedHours(createdAt)} `
    }))
}

export function getTeacherView(rawTeacher: Teacher) {
    let teacherView: teacherViewDto = {
        name: rawTeacher.name,
        subject: rawTeacher.subject,
        elapsedTime: `Days: ${DateToElapsedDays(rawTeacher.createdAt)}, Hours: ${DateToElapsedHours(rawTeacher.createdAt)}`
    }
    return teacherView
}*/