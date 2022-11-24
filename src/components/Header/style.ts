import styled from 'styled-components';
import { ReactComponent as MarkerMap } from '../../images/marker.svg';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';

export const backgroundColor = `
background-color: #f8f8f8
`;

const primaryColor = `#8291a3
`;

const secondColor = `#1e2123
`;

const paddingBlock = ` padding: 0 80px
 `;

const fontSize = ` font-size: 14px
 `;

const activeColor = `#ffd54f `;

const deleteCustomsStyleUl = `
  margin: 0;
  padding: 0;
  list-style: none;
`;

const linkCustomPanel = `
    display: block;
    text-decoration: none;
    padding: 12px 0;
    font-weight: 500;
    font-size: $font-size;
    line-height: 17px;
  `;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
`;

export const HeaderTop = styled.div`
  ${fontSize};
  ${backgroundColor};
  ${paddingBlock};
  box-sizing: border-box;
  line-height: 17px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderCustomPanel = styled.div`
  display: flex;
  column-gap: 40px;
  a:hover {
    background-color: rgba(102, 78, 249, 0.1);
  }
`;

export const HeaderCustomPanelLink = styled(Link)<{ authcolor: string }>`
  ${linkCustomPanel}
  color: ${(props) => (props.authcolor ? '#664ef9' : `${primaryColor}`)}
`;

export const MarkerIconHeaderTop = styled(MarkerMap)`
  display: inline-block;
  margin-right: 5px;
  width: 8px;
  height: 10px;
  fill: ${primaryColor};
`;

export const HeaderNavPages = styled.ul`
  ${deleteCustomsStyleUl}
  display: flex;
  column-gap: 57px;

  a {
    color: ${primaryColor};
    display: block;
    box-sizing: border-box;
    padding: 12px 0 9px;
    text-decoration: none;
    border-bottom: 3px solid transparent;
  }

  a:hover {
    background-color: rgba(102, 78, 249, 0.1);
  }

  .current {
    color: ${secondColor};
    border-bottom-color: ${activeColor};
    ${MarkerIconHeaderTop} {
      fill: ${secondColor};
    }
  }
`;

export const HeaderBottom = styled.div`
  ${paddingBlock};
  display: flex;
  justify-content: space-between;
`;

export const ImageLogo = styled.img.attrs({
  alt: 'Логотип',
  src: `${Logo}`,
})`
  display: block;
  padding: 22px 0;
  width: 139px;
  height: 19px;
`;

export const MarkerIconHeaderBottom = styled(MarkerMap)`
  width: 12px;
  height: 15px;
  fill: ${activeColor};
  margin-left: 15px;
`;

export const HeaderNavServices = styled.ul`
  ${deleteCustomsStyleUl};
  display: flex;
  column-gap: 80px;
  a {
    ${fontSize};
    color: ${secondColor};
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 600;
    line-height: 17px;
    padding: 22px 0;
    border-bottom: 3px solid transparent;
  }

  a:hover:not(.current) {
    border-bottom: 3px solid ${activeColor};
  }

  .current {
    border-bottom: 3px solid #6b50e9;
    ${MarkerIconHeaderBottom} {
      fill: #6b50e9;
    }
  }
`;

export const HeaderAddItem = styled(Link)`
  ${fontSize};
  color: white;
  background: linear-gradient(90deg, #9d94ff 0%, #6b50e9 94.5%);
  border-radius: 19px;
  align-self: center;
  padding: 10px 18px;
  text-decoration: none;
  font-weight: 700;
  line-height: 17px;
`;
