import { newObjData } from '../type/newObjData';
import { QuestionList } from '../pages/mainContainer/_model/questionList';


export const factoryMethod = (data: QuestionList[]): newObjData => {
    const questions = data.map((item: QuestionList) => {
        return item.question
    })
    const answers = data.map((item: QuestionList, index: number) => {
        const correctAnswer = {
            id: Math.floor(Math.random() * 2001),
            answer: item.correct_answer,
            correct: true
        }
        const incAnswer = item.incorrect_answers.map((item: string) => {
            return {
                id: Math.floor(Math.random() * 2001) + index,
                answer: item,
                correct: false
            }
        })
        return [...incAnswer, { ...correctAnswer }]
    })
    return {
        questions: [...questions],
        answers: [...answers]
    }
}
