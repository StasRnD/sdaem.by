import styled from 'styled-components';

export const NewsDetails = styled.main`
  position: relative;
`;

export const NewsDetailsContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 60px 300px;
  display: flex;
  flex-direction: column;
`;

export const NewsDetailsDateAndSocialNetworks = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

export const NewsDetailsImage = styled.img`
  margin-top: 40px;
  display: block;
  width: 100%;
  max-height: 563px;
  object-fit: cover;
  border-radius: 10px;
  position: relative;
`;

export const NewsDetailsText = styled.p`
  margin: 0;
  margin-top: 40px;
  font-size: 16px;
  line-height: 150%;
`;

export const NewsDetailsUnderLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 280px;
  background: linear-gradient(90deg, #94afff 0%, #4e64f9 94.5%);
  opacity: 0.1;
  z-index: 0;
`;

export const NewsDetailsRandom = styled.section`
  position: relative;
`;

export const NewsDetailsRandomContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 44px;
  padding: 62px 81px 100px;
  z-index: 2;
`;

export const NewsDetailsRandomList = styled.div`
  display: flex;
  column-gap: 30px;
`;

export const NewsDetailsRandomHeading = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #1e2123;
`;

export const NewsDetailsRandomListUnderLay = styled.div`
  position: absolute;
  z-index: -1;
  background: linear-gradient(90deg, #94afff 0%, #4e64f9 94.5%);
  opacity: 0.1;
  width: 100%;
  height: 737px;
  top: 0;
`;
