import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateScheduleDto {

    @IsDateString()
    @IsNotEmpty()
    classDate: Date

    @IsString()
    @IsNotEmpty()
    teacher: string

    @IsString()
    @IsNotEmpty()
    student: string

    @IsString()
    @IsNotEmpty()
    subject: string

    @IsNumber()
    @IsNotEmpty()
    value: number

    @IsString()
    @IsNotEmpty()
    environment: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    address: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    link: string
}
