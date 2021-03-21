import { useEffect, useState } from "react"


const IconBox = ({ answerList }: any) => {
    console.log(answerList)
    const [answers, setAnswers] = useState(answerList)
    const [iconStatus, setIconStatus] = useState([''])
    console.log(answerList)
    // useEffect(() => {
    //     answerList.find((item: any) => {
    //         console.log(item)
    //         const a = Object.keys(item).includes("status")
    //         if (a) {

    //             setIconStatus(prev => [...prev, item.status])
    //         }
    //     })

    //     console.log(iconStatus)
    // }, [answerList])
    return (
        <div>
            dfvdfv
        </div>
    )
}
export default IconBox