import { NavLink, Link } from 'react-router-dom';
import { navPagesItems, navServicesItems } from '../../constans';
import { ReactComponent as MarkerMap } from '../../images/marker.svg';
import Logo from '../../images/logo.svg';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__top'>
        <nav>
          <ul className='header__nav-pages'>
            {navPagesItems.map((link, index) => {
              return (
                <li key={index} className='header__nav-pages-item'>
                  <NavLink
                    to={link.redirect}
                    className={({ isActive }) =>
                      'header__nav-pages-link' +
                      (isActive ? ' header__nav-pages-link_active' : '')
                    }
                  >
                    {link.image && (
                      <MarkerMap className='header__marker-nav-pages' />
                    )}
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className='header__custom-panel'>
          <Link to='/izbrannoe' className='header__favourites'>
            Закладки
          </Link>
          <Link to='/auth' className='header__auth'>
            Вход и регистарция
          </Link>
        </div>
      </div>
      <div className='header__bottom'>
        <img src={Logo} alt='Логотип' className='header__logo' />
        <nav>
          <ul className='header__nav-services'>
            {navServicesItems.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={link.redirect}
                    className={({ isActive }) =>
                      'header__nav-services-link' +
                      (isActive ? ' header__nav-services-link_active' : '')
                    }
                  >
                    {link.text}
                    <MarkerMap className='header__marker-nav-services' />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link to='addItem' className='header__addItem'>
          + Разместить объявление
        </Link>
      </div>
    </header>
  );
};
