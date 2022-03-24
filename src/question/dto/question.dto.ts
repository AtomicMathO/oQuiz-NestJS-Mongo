import { Answer } from '../../answer/schemas/answer.schema';
import { Quiz } from '../../quiz/schemas/quiz.schema';
import { Level } from '../../level/schemas/level.schema';

export class QuestionDto {
  readonly _id: number;
  readonly quiz_id: Quiz;
  readonly question: string;
  readonly level_id: Level;
  readonly anecdote: string;
  readonly wiki: string;
  readonly answer_id: Answer;
}
