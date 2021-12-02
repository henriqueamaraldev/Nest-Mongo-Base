import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ScheduleService } from './schedule.service';

@Controller('schedules')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) { }

  @Post()
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.scheduleService.create(createScheduleDto);
  }

  @Get()
  findAll() {
    return this.scheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('scheduleId') scheduleId: string) {
    return this.scheduleService.findOne(scheduleId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() inputSchedule: UpdateScheduleDto) {
    return this.scheduleService.updateScheduleById(+id, inputSchedule);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleService.remove(+id);
  }
}
