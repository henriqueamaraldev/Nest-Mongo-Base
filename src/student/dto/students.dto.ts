import { PartialType } from '@nestjs/mapped-types';

export class CreateStudentsDto {
    name: string
    teacher: string
}

export class UpdateStudentsDto extends PartialType(CreateStudentsDto) { }