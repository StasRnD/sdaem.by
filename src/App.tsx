import './index.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { News } from './components/routes/News/News';
import { NewsDetails } from './components/routes/News/NewsDetails/NewsDetails';
import { Contacts } from './components/routes/Сontacts/Сontacts';
import { Registration } from './components/routes/Registration/Registration';
import { ErrorUrl } from './components/routes/ErrorUrl';
import { Home } from './components/routes/Home';
import { Catalog } from './components/routes/Catalog';

const MainPages = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='news' element={<News />} />
        <Route path='news/:newsId' element={<NewsDetails />} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='contacts' element={<Contacts />} />
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
    </div>
  );
};
