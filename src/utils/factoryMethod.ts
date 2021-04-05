import { newObjData } from '../type/newObjData'
import { QuestionList } from '../pages/mainContainer/_model/questionList'

/**
 * Make better object of data to get to the components
 * @param data : question list of data
 * @returns : return
 */
export const factoryMethod = (data: QuestionList[]): newObjData => {
    const questions = data.map((item: QuestionList) => {
        return item.question
    })
    const answers = data.map((item: QuestionList, index: number) => {
        let correctAnswer = {
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
        const random = Math.floor(Math.random() * Math.floor(3))
        const randomSelected = incAnswer[random]
        incAnswer[random] = correctAnswer
        correctAnswer = randomSelected
        return [...incAnswer, { ...correctAnswer }]
    })
    return {
        questions: [...questions],
        answers: [...answers]
    }
}
