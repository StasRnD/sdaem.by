import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navPagesItems, navServicesItems } from './constans';
import { Auth } from '../routes/Auth/style';

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
  HeaderLoggedUser,
  HeaderLoggedUserImage,
  HeaderLoggedUserName,
  HeaderLoggedButton,
  HeaderUserActivePanel,
  HeaderExitProfile,
} from './style';

export const HeaderComponent = () => {
  const [authUser, setAuthUser] = useState(() => {
    return JSON.parse(localStorage.getItem('authUser') || 'null');
  });

  const [showUserPanel, setShowUserPanel] = useState(false);

  return (
    <Header>
      <HeaderTop>
        <nav>
          <HeaderNavPages>
            {navPagesItems.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={link.redirect}
                    className={({ isActive }) => (isActive ? 'current' : '')}
                  >
                    {link.image && <MarkerIconHeaderTop />}
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
          </HeaderNavPages>
        </nav>
        <HeaderCustomPanel>
          <HeaderCustomPanelLink to='/izbrannoe' authcolor=''>
            Закладки
          </HeaderCustomPanelLink>
          {authUser ? (
            <HeaderLoggedUser>
              <HeaderLoggedUserImage />
              <HeaderLoggedUserName>{authUser.user.login}</HeaderLoggedUserName>
              <HeaderLoggedButton
                active={showUserPanel}
                onClick={() => setShowUserPanel(!showUserPanel)}
              />
              <HeaderUserActivePanel active={showUserPanel}>
                <HeaderExitProfile
                  onClick={() => {
                    localStorage.removeItem('authUser');
                    setAuthUser(null);
                  }}
                >
                  Выйти
                </HeaderExitProfile>
              </HeaderUserActivePanel>
            </HeaderLoggedUser>
          ) : (
            <HeaderCustomPanelLink to='/auth' authcolor='true'>
              Вход и регистарция
            </HeaderCustomPanelLink>
          )}
        </HeaderCustomPanel>
      </HeaderTop>
      <HeaderBottom>
        <ImageLogo />
        <nav>
          <HeaderNavServices>
            {navServicesItems.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={link.redirect}
                    className={({ isActive }) => (isActive ? 'current' : '')}
                  >
                    {link.text}
                    <MarkerIconHeaderBottom />
                  </NavLink>
                </li>
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
