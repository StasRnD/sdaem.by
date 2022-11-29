import styled from 'styled-components';

export const ItemDate = styled.p<{ colorText: string }>`
  margin: 0;
  padding: 10px 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.colorText};
  background-color: #f8f8f8;
  border-radius: 18px;
`;
