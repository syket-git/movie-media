import React from 'react';
import Body from './sections/Body';
import Header from './sections/Header';
import Search from './sections/Search';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Body />
    </div>
  );
};

export default HomePage;
