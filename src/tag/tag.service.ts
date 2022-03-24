import { Injectable } from '@nestjs/common';
import { Tag } from './schemas/tag.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TagService {
  constructor(@InjectModel('Tag') private readonly tagModel: Model<Tag>) {}

  async findAll(): Promise<Tag[]> {
    return await this.tagModel.find().populate('quizzes');
  }

  async findOne(id: number): Promise<Tag> {
    return await this.tagModel.findOne({ _id: id }).populate('quizzes');
  }

  async create(tag: Tag): Promise<Tag> {
    const newTag = new this.tagModel(tag);
    return await newTag.save();
  }

  async delete(id: number): Promise<Tag> {
    return await this.tagModel.findByIdAndRemove(id);
  }

  async update(id: number, tag: Tag): Promise<Tag> {
    return await this.tagModel.findByIdAndUpdate(id, tag, { new: true });
  }
}
