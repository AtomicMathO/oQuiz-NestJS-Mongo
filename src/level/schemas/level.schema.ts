import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LevelDocument = Level & Document;

@Schema()
export class Level {
  @Prop({ required: true })
  _id: number;

  @Prop({ required: true })
  name: string;
}

export const LevelSchema = SchemaFactory.createForClass(Level);
