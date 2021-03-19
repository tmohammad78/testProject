import styled from 'styled-components';

export const ButtonStyle = styled.button.attrs(props => ({
    type: 'text'
}))`
    padding-left : ${({ prl }) => prl || 5}px;    
    padding-right : ${({ prl }) => prl || 5}px;
    padding-top : ${({ ptb }) => ptb || 10}px;
    padding-bottom: ${({ ptb }) => ptb || 10}px;
    width: 90%;
    margin: .5rem auto;
    color : ${({ color }) => color};
    border: none;
    background-color:transparent;
    border-radius: 20px;
    word-break: break-all;
    box-shadow : 0px 0px 5px 0px rgb(0 0 0 / 48%);
    &[disabled] {
        cursor: default;
        background-color: #eeee;
      }
      &:focus {
        -webkit-appearance: none;
        outline: 0px !important ;
        -webkit-tap-highlight-color: transparent;
      }
`