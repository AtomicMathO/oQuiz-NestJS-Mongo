import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Question } from '../../question/schemas/question.schema';

export type AnswerDocument = Answer & Document;

@Schema()
export class Answer {
  @Prop({ required: true })
  _id: number;

  @Prop({ required: true })
  description: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.Number,
    ref: 'Question',
  })
  question_id: Question;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
