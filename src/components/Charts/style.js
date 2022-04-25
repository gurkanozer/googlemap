import styled from "styled-components";

export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 32px;
`;

export const ChartsHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  font-size: 18px !important;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 16px;
`;
export const ButtonGroup = styled.div`
  margin-bottom: 16px;
`;
export const ChartsBody = styled.div`
  width: 90%;
`;
