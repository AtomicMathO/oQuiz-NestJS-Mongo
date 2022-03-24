import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Quiz } from '../../quiz/schemas/quiz.schema';

export type TagDocument = Tag & Document;

@Schema()
export class Tag {
  @Prop({ required: true })
  _id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.Number, ref: 'Quiz' }] })
  quizzes: Quiz[];
}

export const TagSchema = SchemaFactory.createForClass(Tag);
