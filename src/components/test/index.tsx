import ButtonList from "../buttonList"
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
const TestComponent = () => {

    return (
        <div>
            <TitleQuestion question="What does CPU stand for?" />
            <ButtonList />
        </div>
    )
}

export default TestComponent;