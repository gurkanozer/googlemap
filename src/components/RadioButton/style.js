import styled from "styled-components";

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
export const Checkmark = styled.span``;

export const Label = styled.label`
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.darkBlue};
  &.active {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
