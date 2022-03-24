import { Injectable } from '@nestjs/common';
import { Answer } from './schemas/answer.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel('Answer') private readonly answerModel: Model<Answer>,
  ) {}

  async findAll(): Promise<Answer[]> {
    return await this.answerModel.find().populate('question_id');
  }

  async findOne(id: number): Promise<Answer> {
    return await this.answerModel.findOne({ _id: id }).populate('question_id');
  }

  async create(answer: Answer): Promise<Answer> {
    const newAnswer = new this.answerModel(answer);
    return await newAnswer.save();
  }

  async delete(id: number): Promise<Answer> {
    return await this.answerModel.findByIdAndRemove(id);
  }

  async update(id: number, answer: Answer): Promise<Answer> {
    return await this.answerModel.findByIdAndUpdate(id, answer, { new: true });
  }
}
