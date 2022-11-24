import { NavLink } from 'react-router-dom';
import { navPagesItems, navServicesItems } from '../../constans';

import {
  Header,
  HeaderTop,
  HeaderNavPages,
  MarkerIconHeaderTop,
  HeaderCustomPanel,
  HeaderCustomPanelLink,
  HeaderBottom,
  ImageLogo,
  HeaderAddItem,
  HeaderNavServices,
  MarkerIconHeaderBottom,
} from './style';

export const HeaderComponent = () => {
  return (
    <Header>
      <HeaderTop>
        <nav>
          <HeaderNavPages>
            {navPagesItems.map((link, index) => {
              return (
                <NavLink
                  key={index}
                  to={link.redirect}
                  className={({ isActive }) => (isActive ? 'current' : '')}
                >
                  <li>
                    {link.image && <MarkerIconHeaderTop />}
                    {link.text}
                  </li>
                </NavLink>
              );
            })}
          </HeaderNavPages>
        </nav>
        <HeaderCustomPanel>
          <HeaderCustomPanelLink to='/izbrannoe' authcolor=''>
            Закладки
          </HeaderCustomPanelLink>
          <HeaderCustomPanelLink to='/auth' authcolor='true'>
            Вход и регистарция
          </HeaderCustomPanelLink>
        </HeaderCustomPanel>
      </HeaderTop>
      <HeaderBottom>
        <ImageLogo />
        <nav>
          <HeaderNavServices>
            {navServicesItems.map((link, index) => {
              return (
                <NavLink
                  key={index}
                  to={link.redirect}
                  className={({ isActive }) => (isActive ? 'current' : '')}
                >
                  <li>
                    {link.text}
                    <MarkerIconHeaderBottom />
                  </li>
                </NavLink>
              );
            })}
          </HeaderNavServices>
        </nav>
        <HeaderAddItem to='addItem' className='header__addItem'>
          + Разместить объявление
        </HeaderAddItem>
      </HeaderBottom>
    </Header>
  );
};
