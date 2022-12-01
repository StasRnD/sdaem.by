import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HeaderComponent } from './Header/HeaderComponent';
import { Footer } from './Footer/Footer';
import { NewsComponent } from './routes/News/NewsComponent';
import { NewsDetailsComponent } from './routes/NewsDetails/NewsDetailsComponent';
import { ContactsComponent } from './routes/Сontacts/СontactsComponent';
import { Registration } from './routes/Registration/Registration';
import { ErrorUrl } from './routes/ErrorUrl';
import { Home } from './routes/Home';
import { Catalog } from './routes/Catalog';
import GlobalStyle from './GlobalStyle';

const MainPages = () => {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='news' element={<NewsComponent />} />
        <Route path='news/:newsId' element={<NewsDetailsComponent />} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='contacts' element={<ContactsComponent />} />
        <Route path='*' element={<ErrorUrl />} />
      </Routes>
      <Footer />
    </>
  );
};

export const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/*' element={<MainPages />} />
        <Route path='/auth' element={<Registration />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
};
