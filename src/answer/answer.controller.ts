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
import { AnswerDto } from './dto/answer.dto';
import { AnswerService } from './answer.service';
import { Answer } from './schemas/answer.schema';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get()
  findAll(): Promise<Answer[]> {
    return this.answerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id): Promise<Answer> {
    return this.answerService.findOne(id);
  }

  @Post()
  create(@Body() createAnswerDto: AnswerDto): Promise<Answer> {
    return this.answerService.create(createAnswerDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id): Promise<Answer> {
    return this.answerService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateAnswerDto: AnswerDto,
    @Param('id', ParseIntPipe) id,
  ): Promise<Answer> {
    return this.answerService.update(id, updateAnswerDto);
  }
}
