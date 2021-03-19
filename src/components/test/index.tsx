import ButtonList from "../buttonList"
import QuestionBox from "../questionBox";
import TitleQuestion from "../title";


const obj = [
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What does CPU stand for?",
        "correct_answer": "Central Processing Unit",
        "incorrect_answers": [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What does CPU stand for?",
        "correct_answer": "Central Processing Unit",
        "incorrect_answers": [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit"
        ]
    }
]
const answers = [
    {
        answer: "Central Processing Unit 1",
        correct: true
    },
    {
        answer: "Central Processing Unit 2",
    },
    {
        answer: "Central Processing Unit 3",
    },
    {
        answer: "Central Processing Unit 4",
    }
]

// const factory = () => {
//     return obj.map((item) => {
//         const correctAnswer = {
//             answer: item.correct_answer,
//             correct: true
//         }
//         const incAnswer = item.incorrect_answers.map((answer) => {
//             return {
//                 answer,
//                 correct: false
//             }
//         })
//         console.log(incAnswer)
//         return {
//             question: item.question,
//             answers: [
//                 {...correctAnswer},

//             ]
//         }
//     })

// }
const TestComponent = () => {

    return (
        <div>
            <QuestionBox question="dcdc" answers={answers} />
        </div>
    )
}

export default TestComponent;