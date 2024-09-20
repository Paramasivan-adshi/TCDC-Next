import HomeOne from '@/components/homes/home';
import Wrapper from '@/layout/Wrapper';
import React from 'react';


export const metadata = {
  title: "TCDC Home Page",
};

const HomeMain = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default HomeMain;