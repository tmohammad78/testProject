import { FC, useCallback, useContext, useEffect, useState } from "react";
import { DataContext } from "src/pages/mainContainer";
import { newAnswer } from "../../type/newAnswer";
import Button from "../button";
import './style.scss';

const ButtonList: FC = () => {
    const { data, setData } = useContext(DataContext)
    // const [list, setList] = useState(listButton);
    // useEffect(() => {
    //     setList(listButton)
    // }, [listButton])
    const handlerClick = (item: any) => {
        const [obj] = data.answers[data.step].filter((answer: any) => answer.id === item.id).map((obj: any) => {
            if (obj.correct) {
                obj.status = 'correct'
            } else {
                obj.status = 'incorrect'
            }
            return obj;
        })
        console.log(obj)
        // setData({
        //     result:
        // })
        // setList([...list]);
        // callNextStep()
    }
    return (
        <div className="buttonList">
            {data.answers[data.step] && data.answers[data.step].map((item: newAnswer, i: number) => {
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