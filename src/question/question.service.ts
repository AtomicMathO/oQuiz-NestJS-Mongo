import { Injectable } from '@nestjs/common';
import { Question } from './schemas/question.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel('Question') private readonly questionModel: Model<Question>,
  ) {}

  async findAll(): Promise<Question[]> {
    return await this.questionModel
      .find()
      .populate(['quiz_id', 'level_id', 'answer_id']);
  }

  async findOne(id: number): Promise<Question> {
    return await this.questionModel
      .findOne({ _id: id })
      .populate(['quiz_id', 'level_id', 'answer_id']);
  }

  async create(question: Question): Promise<Question> {
    const newQuestion = new this.questionModel(question);
    return await newQuestion.save();
  }

  async delete(id: number): Promise<Question> {
    return await this.questionModel.findByIdAndRemove(id);
  }

  async update(id: number, question: Question): Promise<Question> {
    return await this.questionModel.findByIdAndUpdate(id, question, {
      new: true,
    });
  }
}
