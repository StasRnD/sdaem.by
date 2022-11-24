import styled from 'styled-components';
import House from '../../../images/house.svg';
import Bullet from '../../../images/bullet.png';

export const News = styled.main`
  padding: 0 80px;
  margin-top: 42px;
`;

export const NewsHeader = styled.section`
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
  width: 100%;
`;

export const NewsInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export const NewsRoad = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
`;

export const ImageHouse = styled.img.attrs({
  alt: 'картинка домика',
  src: `${House}`,
})`
  display: block;
  width: 12px;
  height: 12px;
`;

export const NewsRoadText = styled.p`
  display: flex;
  column-gap: 7px;
  align-items: center;
  margin: 0;
  color: #686868;
  font-size: 14px;
  line-height: 100%;

  &:before {
    background-image: url(${Bullet});
    content: '';
    width: 3px;
    height: 4px;
  }
`;

export const NewsTitle = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 30px;
  color: #1e2123;
  line-height: 100%;
`;
