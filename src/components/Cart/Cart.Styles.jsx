import styled from "styled-components"

export const SectionCartStyled = styled.section`
    width: 100%;
    max-width: 330px;
    background-color: white;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    padding: 100px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translate(110%, 0);
    transition: all 400ms ease;

    &.cart-active {
        transform: translate(0, 0);
    }
`

export const DivCartItemsStyled = styled.div`
    flex-grow: 1;
    overflow: auto; 
`

export const DivCartResumeStyled = styled.div`
    font-size: 1.8rem;
    font-weight: 500;
    padding: 35px 0 15px;
    border-top: 1px solid #ddd;
`
