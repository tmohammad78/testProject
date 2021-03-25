import styled from 'styled-components';


interface ButtonType {
    border?: string;
    color?: string
}

export const InputStyle = styled.input<ButtonType>`
    padding:.25rem .5rem;
    text-align:center;
    border-radius:.25rem;
    background:transparent;
    font-size:1rem;
    border:${({ border }) => border};
    color: ${({ color }) => color ? color : "white"};
    &:focus {
        -webkit-appearance: none;
        outline: 0 !important ;
    }
`
