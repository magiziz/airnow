import styled from "styled-components";

export const SDKTable = styled.div`
  flex: 1;
  margin-top: 36px;
  border: 2px solid #3f40e2;
  border-radius: 4px;
  padding: 24px;
`;

export const SDKTitle = styled.h1`
  font-size: 24px;
`;

export const SDKDate = styled.h1`
  font-size: 18px;
  margin-top: 24px;
  padding-bottom: 14px;
  border-bottom: 2px solid #000000;
`;

export const SDKTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SDKGridTable = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;
