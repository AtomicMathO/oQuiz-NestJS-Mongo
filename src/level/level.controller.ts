import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { LevelDto } from './dto/level.dto';
import { LevelService } from './level.service';
import { Level } from './schemas/level.schema';

@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  @Get()
  findAll(): Promise<Level[]> {
    return this.levelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id): Promise<Level> {
    return this.levelService.findOne(id);
  }

  @Post()
  create(@Body() createLevelDto: LevelDto): Promise<Level> {
    return this.levelService.create(createLevelDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id): Promise<Level> {
    return this.levelService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateLevelDto: LevelDto,
    @Param('id', ParseIntPipe) id,
  ): Promise<Level> {
    return this.levelService.update(id, updateLevelDto);
  }
}
