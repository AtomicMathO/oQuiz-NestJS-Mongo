import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ParseIntPipe,
  Render,
} from '@nestjs/common';
import { QuizDto } from './dto/quiz.dto';
import { QuizService } from './quiz.service';
import { Quiz } from './schemas/quiz.schema';

@Controller()
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  @Render('index')
  async findAll() {
    const quizzes = await this.quizService.findAll();
    return { quizzes: quizzes };
  }
  // findAll(): Promise<Quiz[]> {
  //   return this.quizService.findAll();
  // }

  @Get('quiz/:id')
  @Render('quiz')
  async findOne(@Param('id', ParseIntPipe) id) {
    const quiz = await this.quizService.findOne(id);
    return { quiz: quiz };
  }
  // findOne(@Param('id', ParseIntPipe) id): Promise<Quiz> {
  //   return this.quizService.findOne(id);
  // }

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
function id(arg0: typeof ParseIntPipe, id: any) {
  throw new Error('Function not implemented.');
}
