import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from '../student/student.module';
import { TeacherModule } from '../teacher/teacher.module';
import { Schedule, ScheduleSchema } from './entities/schedule.entity';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: Schedule.name, schema: ScheduleSchema }]), TeacherModule, StudentModule],
  controllers: [ScheduleController],
  providers: [ScheduleService]
})
export class ScheduleModule { }
