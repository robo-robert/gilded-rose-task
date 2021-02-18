import { Answers } from "../enums";

type Answer = Answers.YES | Answers.NO | Answers.MAYBE;

export interface IAnswerReponse {
    answer: Answer;
    force: true;
    image: string;
}