import { Question } from '../../question/schemas/question.schema';

export class AnswerDto {
  readonly _id: number;
  readonly description: string;
  readonly question_id: Question;
}
