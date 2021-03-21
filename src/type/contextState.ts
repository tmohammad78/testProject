import { newAnswer } from "./newAnswer";

export interface ContextState {
    questions: string[],
    answers: newAnswer[][],
    step: number,
    result: boolean[]
}