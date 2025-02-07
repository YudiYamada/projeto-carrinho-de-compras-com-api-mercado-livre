import styled from 'styled-components';

export const ButtonAddCart = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    margin: 12px 15px;
    color: #0c5dd6;
    display: none;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.8);
    font-size: 1.5rem;
    cursor: pointer;
`;

export const SectionProductCard = styled.section`
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 auto;
  position: relative;
  
  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  &:hover ${ButtonAddCart} {
    display: flex;
  }
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardInfos = styled.div`
    padding: 20px;
    border-top: 1px solid #ddd;
`;

export const CardPrice = styled.h2`
    font-size: 30px;
    font-weight: 400;
    display: block;
    margin-bottom: 10px;
`;

export const CardTitle = styled.h2`
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    line-height: 1.5;
    font-weight: 500;
`;
