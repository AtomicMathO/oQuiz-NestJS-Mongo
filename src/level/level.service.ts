import { Injectable } from '@nestjs/common';
import { Level } from './schemas/level.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LevelService {
  constructor(
    @InjectModel('Level') private readonly levelModel: Model<Level>,
  ) {}

  async findAll(): Promise<Level[]> {
    return await this.levelModel.find();
  }

  async findOne(id: number): Promise<Level> {
    return await this.levelModel.findOne({ _id: id });
  }

  async create(level: Level): Promise<Level> {
    const newLevel = new this.levelModel(level);
    return await newLevel.save();
  }

  async delete(id: number): Promise<Level> {
    return await this.levelModel.findByIdAndRemove(id);
  }

  async update(id: number, level: Level): Promise<Level> {
    return await this.levelModel.findByIdAndUpdate(id, level, { new: true });
  }
}
