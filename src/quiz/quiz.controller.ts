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
import { QuizDto } from './dto/quiz.dto';
import { QuizService } from './quiz.service';
import { Quiz } from './schemas/quiz.schema';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  findAll(): Promise<Quiz[]> {
    return this.quizService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id): Promise<Quiz> {
    return this.quizService.findOne(id);
  }

  @Post()
  create(@Body() createQuizDto: QuizDto): Promise<Quiz> {
    return this.quizService.create(createQuizDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id): Promise<Quiz> {
    return this.quizService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateQuizDto: QuizDto,
    @Param('id', ParseIntPipe) id,
  ): Promise<Quiz> {
    return this.quizService.update(id, updateQuizDto);
  }
}
