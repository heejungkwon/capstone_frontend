import React from 'react';
import styled from 'styled-components';
import Service from "./component/service";
import Tech from './component/tech';
import Header from "./component/header";

const ScrollPage = () => {
  return (
    <MainBlock>
      <ContentBlock>
        <Service /> 
        <Tech/>
        <Header />
      </ContentBlock>
    </MainBlock>
  );
};

export default ScrollPage;