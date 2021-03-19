import { useState } from "react";
import Button from "../button";

interface objectType {
    answer: string;
    correct: boolean,
    className?: string
}

interface Props {
    listButton: objectType[];
}
const ButtonList = ({ listButton }: Props) => {
    const [list, setList] = useState(listButton)
    const handlerClick = (index: number) => {
    }
    return (
        <div className="buttonList" style={{
            textAlign: "center"
        }}>
            {list.map((item: objectType, i: number) => {
                return (
                    <Button borderColor={item.className === "test" ? 'green' : 'red'} key={i} onClick={() => handlerClick(i)} >
                        {item.answer}
                    </Button>
                );
            })}
        </div>
    )
}
export default ButtonList;