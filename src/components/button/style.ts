import styled from 'styled-components';
interface ButtonType {
  prl?: number;
  ptb?: number;
  color?: string
}
export const ButtonStyle = styled.button<ButtonType>`
    padding-left : ${({ prl }) => prl || .25}rem;    
    padding-right : ${({ prl }) => prl || .25}rem;
    padding-top : ${({ ptb }) => ptb || .5}rem;
    padding-bottom: ${({ ptb }) => ptb || .5}rem;
    width: 90%;
    margin: .5rem auto;
    color : ${({ color }) => color};
    background-color:transparent;
    border-radius: 1rem;
    word-break: break-all;
    box-shadow : 0 0 .25rem 0 rgb(0 0 0 / 48%);
    &.incorrect{
      border-color: red;
    }
    &.correct{
      border-color: green;
     }
    &[disabled] {
        cursor: default;
        background-color: #eeee;
    }
    &:focus {
        -webkit-appearance: none;
        outline: 0 !important ;
        -webkit-tap-highlight-color: transparent;
    }
`