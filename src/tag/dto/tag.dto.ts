import { Quiz } from '../../quiz/schemas/quiz.schema';

export class TagDto {
  readonly _id: number;
  readonly name: string;
  readonly quizzes: Quiz[];
}
