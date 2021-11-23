import { PartialType } from "@nestjs/mapped-types"
import { IsString } from 'class-validator'
import { Teacher } from "../entities/teacher.entity"

export class CreateTeacherDto {
    @IsString()
    name: string

    @IsString()
    subject?: string
}

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) { }

export interface teacherViewDto {
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
    return rawTeachers.map(({ created_at, name, subject }) => ({
        name,
        subject,
        elapsedTime: `Days: ${DateToElapsedDays(created_at)}, Hours: ${DateToElapsedHours(created_at)} `
    }))
}

export function getTeacherView(rawTeacher: Teacher) {
    let teacherView: teacherViewDto = {
        name: rawTeacher.name,
        subject: rawTeacher.subject,
        elapsedTime: `Days: ${DateToElapsedDays(rawTeacher.created_at)}, Hours: ${DateToElapsedHours(rawTeacher.created_at)}`
    }
    return teacherView
}