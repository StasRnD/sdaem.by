import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const cropText = `
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3 - 20px);
  max-width: 406px;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const NewsItemImage = styled.img.attrs({
  alt: 'Новостная картинка',
})`
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  max-height: 226px;
`;

export const NewsItemDescription = styled.div`
  padding: 0 20px;
`;

export const NewsItemTitle = styled.h3`
  ${cropText};
  -webkit-line-clamp: 2;
  margin: 0;
  margin-top: 30px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #1e2123;
`;

export const NewsItemText = styled.p`
  ${cropText};
  align-self: flex-end;
  -webkit-line-clamp: 5;
  margin: 0;
  margin-top: 30px;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #686868;
`;

export const NewsItemInfo = styled.div`
  display: flex;
  text-align: center;
  margin-top: 23px;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 2px solid #f8f8f8;
`;

export const NewsItemDate = styled.p`
  margin: 0;
  padding: 10px 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #8291a3;
  background-color: #f8f8f8;
  border-radius: 18px;
`;

export const NewsItemButton = styled.button`
  border: none;
  padding: 0;
  padding: 10px 15px;
  background-color: rgba(102, 78, 249, 0.1);
  border-radius: 17px;
  cursor: pointer;
`;

export const NewsItemButtonLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #664ef9;
`;
