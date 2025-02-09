import styled from "styled-components"

export const ButtonCartStyled = styled.button`
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border: none;
    background: none;
    cursor: pointer;
    position: relative;
    margin-left: 20px;
    color: #333;
`

export const SpanCartStatusStyled = styled.span`
    background: red;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`