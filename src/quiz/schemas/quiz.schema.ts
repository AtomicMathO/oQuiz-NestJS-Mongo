import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Tag } from '../../tag/schemas/tag.schema';
import { User } from '../../user/schemas/user.schema';

export type QuizDocument = Quiz & Document;

@Schema()
export class Quiz {
  @Prop({ required: true })
  _id: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: mongoose.Schema.Types.Number, ref: 'User' })
  user_id: User;

  @Prop({ type: [{ type: mongoose.Schema.Types.Number, ref: 'Tag' }] })
  tags: Tag[];
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
