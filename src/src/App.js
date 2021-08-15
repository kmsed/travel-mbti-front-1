import React from 'react';
import styled from "styled-components";
import MbtiStart from './pages/MbtiStart'
import img from './travel.jpg'

const BackStyle =  styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${img});
  background-size: cover;
`;

const App = () => {
  return (
      <BackStyle>
        <MbtiStart/>
      </BackStyle>
  );
}

export default App;