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
import { QuestionDto } from './dto/question.dto';
import { QuestionService } from './question.service';
import { Question } from './schemas/question.schema';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  findAll(): Promise<Question[]> {
    return this.questionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id): Promise<Question> {
    return this.questionService.findOne(id);
  }

  @Post()
  create(@Body() createQuestionDto: QuestionDto): Promise<Question> {
    return this.questionService.create(createQuestionDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id): Promise<Question> {
    return this.questionService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateQuestionDto: QuestionDto,
    @Param('id', ParseIntPipe) id,
  ): Promise<Question> {
    return this.questionService.update(id, updateQuestionDto);
  }
}
