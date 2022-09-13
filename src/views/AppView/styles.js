import styled from "styled-components";

export const App = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 60px 80px;
`;

export const ButtonSelectContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
  outline-width: 0;
  cursor: pointer;
  font-size: 18px;
  background: ${({ $isSelected }) => ($isSelected ? "#3F40E2" : "#f2f5f8")};
  color: ${({ $isSelected }) => ($isSelected ? "#fff" : "#000000")};
  font-weight: 600;
  border: ${({ $isSelected }) =>
    $isSelected ? "1px solid transparent" : "1px solid #000000"};

  &:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  &:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
