import { Tag } from '../../tag/schemas/tag.schema';
import { User } from '../../user/schemas/user.schema';

export class QuizDto {
  readonly _id: number;
  readonly title: string;
  readonly description: string;
  readonly user_id: User;
  readonly tags: Tag[];
}
