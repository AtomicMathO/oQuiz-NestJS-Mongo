import { Injectable } from '@nestjs/common';
import { Quiz } from './schemas/quiz.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuizService {
  constructor(@InjectModel('Quiz') private readonly quizModel: Model<Quiz>) {}

  async findAll(): Promise<Quiz[]> {
    const quizzes = await this.quizModel.find().populate(['user_id', 'tags']);
    return quizzes;
  }

  async findOne(id: number): Promise<Quiz> {
    return await this.quizModel
      .findById({ _id: id })
      .populate(['user_id', 'tags', 'questions']);
  }

  async create(quiz: Quiz): Promise<Quiz> {
    const newQuiz = new this.quizModel(quiz);
    return await newQuiz.save();
  }

  async delete(id: number): Promise<Quiz> {
    return await this.quizModel.findByIdAndRemove(id);
  }

  async update(id: number, quiz: Quiz): Promise<Quiz> {
    return await this.quizModel.findByIdAndUpdate(id, quiz, { new: true });
  }
}
