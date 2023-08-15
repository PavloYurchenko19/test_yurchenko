import styled from "styled-components";

export const Button = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background-color: #555;
  }
`;

export const Icon = styled.span`
  font-size: 18px;
`;