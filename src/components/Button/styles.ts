import styled from "styled-components";

export const ContainerButton = styled.button`
  border-radius: 8px;
  background-color: ${(props) => props.theme["green-500"]};
  width: 100%;
  padding: 12px;
  border: 0px;
  cursor: pointer;

  p {
    color: ${(props) => props.theme.white};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    opacity: 0.7;
    transition: opacity 0.2s;
  }
`;
