import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Answer } from '../../answer/schemas/answer.schema';
import { Quiz } from '../../quiz/schemas/quiz.schema';
import { Level } from '../../level/schemas/level.schema';

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  @Prop({ required: true })
  _id: number;

  @Prop({ required: true, type: mongoose.Schema.Types.Number, ref: 'Quiz' })
  quiz_id: Quiz;

  @Prop({ required: true })
  question: string;

  @Prop({ required: true, type: mongoose.Schema.Types.Number, ref: 'Level' })
  level_id: Level;

  @Prop({ required: true })
  anecdote: string;

  @Prop({ required: true })
  wiki: string;

  @Prop({ required: true, type: mongoose.Schema.Types.Number, ref: 'Answer' })
  answer_id: Answer;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
