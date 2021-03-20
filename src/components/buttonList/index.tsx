import { useCallback, useEffect, useState } from "react";
import { newAnswer } from "../../type/newAnswer";
import Button from "../button";
import './style.scss';

const ButtonList = ({ listButton, callNextStep }: any) => {
    const [list, setList] = useState(listButton);
    useEffect(() => {
        setList(listButton)
    }, [listButton])
    const handlerClick = (item: any) => {
        const [obj] = list.filter((answer: any) => answer.id === item.id).map((obj: any) => {
            if (obj.correct) {
                obj.status = 'correct'
            } else {
                obj.status = 'incorrect'
            }
            return obj;
        })
        setList([...list]);
        callNextStep()
    }
    return (
        <div className="buttonList">
            {list.map((item: newAnswer, i: number) => {
                return (
                    <Button className={item.status} key={item.id} onClick={() => handlerClick(item)}  >
                        {item.answer}
                    </Button>
                );
            })}
        </div>
    )
}
export default ButtonList;