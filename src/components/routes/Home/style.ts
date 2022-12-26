import styled from 'styled-components';
import CityMap from '../../../images/city-map.png';

export const Home = styled.main`
  padding: 0 77px;
  margin: 0 auto;
`;

export const HomeFilter = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  background-image: url(${CityMap}),
    linear-gradient(360deg, #7e6af3 15.95%, #6540cd 63.1%);
  border-radius: 0 0 20px 20px;
  padding: 82px 111px 118px;
`;

export const HomeTitle = styled.h1`
  margin: 0;
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-shadow: 0px 2px 5px rgba(0, 14, 142, 0.3);
  span {
    color: #ffd54f;
  }
`;
