import styled from 'styled-components';
import Search from '../../../../images/search.svg';

export const NewsList = styled.section`
  margin-top: 62px;
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
`;

export const NewsListFilter = styled.form.attrs({
  action: '',
})`
  width: 70%;
  max-width: 621px;
  position: absolute;
  align-self: flex-end;
  top: -87px;
  right: 0;
`;

export const NewsListSearch = styled.input.attrs({
  type: 'text',
  placeholder: 'Поиск по статьям',
})`
  border: none;
  outline: none;
  padding: 0;
  padding: 9px 58px 11px 21px;
  box-shadow: 0px 10px 20px rgba(0, 96, 206, 0.05);
  border-radius: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #686868;
  width: calc(100% - 79px);
`;

export const NewsListButton = styled.button.attrs({
  type: 'submit',
})`
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(${Search});
  background-position: center;
  background-repeat: no-repeat;
  background-color: #664ef9;
  width: 53px;
  height: 37px;
  border: none;
  border-radius: 29px;
`;
