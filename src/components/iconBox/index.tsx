import React, { FC, memo, useContext } from 'react'

import { DataContext } from '../../context/data-context'
import Icon from '../iconElement'

import './style.scss'

const IconBox: FC = () => {
    const { state } = useContext(DataContext)
    return (
        <div className="iconBox">
            {state?.result.map((status: boolean, i: number) => {
                return <Icon key={i} name={status ? 'tick' : 'times'} />
            })}
        </div>
    )
}
export default memo(IconBox)
