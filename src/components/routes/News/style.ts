import styled from 'styled-components';

export const News = styled.main`
  position: relative;
  padding: 0 80px;
  margin-top: 42px;
`;

export const NewsContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const NewsUnderlay = styled.div`
  width: 70%;
  height: 1000px;
  top: 0;
  right: 0;
  position: absolute;
  background: linear-gradient(90deg, #94afff 0%, #4e64f9 94.5%);
  z-index: 1;
  opacity: 0.1;
  border-radius: 40px 0 0 40px;
`;
