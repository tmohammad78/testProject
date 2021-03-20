import { QuestionList } from './questionList';
export interface QuestionResponse {
    response_code: number;
    results: QuestionList[]
}