import styled from 'styled-components';
import House from '../../../images/house.svg';
import Bullet from '../../../images/bullet.svg';

export const InfoBlock = styled.section`
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
  width: 100%;
`;

export const InfoBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export const InfoBlockRoad = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
`;

export const InfoBlockImage = styled.img.attrs({
  alt: 'картинка домика',
  src: `${House}`,
})`
  display: block;
  width: 12px;
  height: 12px;
`;

export const InfoBlockTextItem = styled.p`
  display: flex;
  column-gap: 7px;
  align-items: center;
  margin: 0;
  color: #664ef9;
  font-size: 14px;
  line-height: 100%;
  &:last-child {
    color: #686868;
    &:before {
      background-image: url(${Bullet});
      content: '';
      width: 3px;
      height: 3px;
    }
  }
`;

export const InfoBlockTitle = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 30px;
  color: #1e2123;
  line-height: 100%;
`;
