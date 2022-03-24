import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizModule } from './quiz/quiz.module';
import { AnswerModule } from './answer/answer.module';
import { LevelModule } from './level/level.module';
import { TagModule } from './tag/tag.module';
import { QuestionModule } from './question/question.module';
import { UserModule } from './user/user.module';
import config from './config/keys'; // fichier keys.ts contenant l'URI de connection à la bdd et de futur clefs d'API

@Module({
  imports: [
    QuizModule,
    AnswerModule,
    LevelModule,
    TagModule,
    QuestionModule,
    UserModule,
    MongooseModule.forRoot(config.mongoURI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
