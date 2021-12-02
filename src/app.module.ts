import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODBLINK),
    TeacherModule, StudentModule, ScheduleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
