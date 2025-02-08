import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoaderIcon = styled(BiLoaderAlt)`
  font-size: 2rem;
  animation: ${spin} 1s linear infinite;
  display: inline-block;
`;
