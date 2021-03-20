import { newQuestion } from './../type/newQuestion';
import { QuestionList } from '../pages/mainContainer/_model/questionList';


export const factoryMethod = (data: QuestionList[]): Array<newQuestion> => {
    return data.map((item: QuestionList, index: number) => {
        const correctAnswer = {
            id: Math.floor(Math.random() * 10),
            answer: item.correct_answer,
            correct: true
        }
        const incAnswer = item.incorrect_answers.map((item: string) => {
            return {
                id: Math.floor(Math.random() * 100) + index,
                answer: item,
                correct: false
            }
        })
        const newArr = [...incAnswer, { ...correctAnswer }]
        return {
            question: item.question,
            answers: [...newArr]
        }
    })
}
