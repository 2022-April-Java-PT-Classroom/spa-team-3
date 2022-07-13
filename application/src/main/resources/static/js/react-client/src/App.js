import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import style from './style.module.scss';
import AppRouter from './components/app-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className={style.page}>
      <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
