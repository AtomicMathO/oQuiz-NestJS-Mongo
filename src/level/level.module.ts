import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';
import { LevelSchema } from './schemas/level.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Level', schema: LevelSchema }]),
  ],
  controllers: [LevelController],
  providers: [LevelService],
})
export class LevelModule {}
