import styled from 'styled-components'

interface ButtonType {
    prl?: number
    ptb?: number
    color?: string
    bgColor?: string
    fontSize?: number
}

export const ButtonStyle = styled.button<ButtonType>`
    padding-left: ${({ prl }) => prl || 0.25}rem;
    padding-right: ${({ prl }) => prl || 0.25}rem;
    padding-top: ${({ ptb }) => ptb || 0.7}rem;
    padding-bottom: ${({ ptb }) => ptb || 0.7}rem;
    width: 100%;
    border: none;
    font-size: ${({ fontSize }) => fontSize || 0.7}rem;
    margin: 0.5rem auto;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
    color: ${({ color }) => color};
    border-radius: 1rem;
    word-break: break-all;
    box-shadow: 0 0 0.25rem 0 rgb(0 0 0 / 48%);

    &.incorrect {
        border: 0.1rem solid red;
    }

    &.correct {
        border: 0.1rem solid green;
    }

    &[disabled] {
        cursor: default;
        background-color: #eeee;
    }

    &:focus {
        -webkit-appearance: none;
        outline: 0 !important;
        -webkit-tap-highlight-color: transparent;
    }
`
