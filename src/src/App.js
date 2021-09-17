
import React from 'react';
import styled from "styled-components";
import MbtiStart from './pages/MbtiStart';
import MbtiQuestion from './pages/MbtiQuestion';
import MbtiResult from './pages/MbtiResult';
import img from './travel.jpg';
import { HashRouter, Route } from 'react-router-dom';

//공통적용 부분
const BackStyle =  styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${img});
  background-size: cover;
  font-family: 'Noto Sans KR', sans-serif; //폰트 변경, public에 index.html head부분에 링크 붙혀둠
`;

const App = () => {
  return (
      <BackStyle>
        <HashRouter>
          <Route  exact path="/" component={MbtiStart} />
          <Route path="/question" component={MbtiQuestion} />
          <Route path="/result" component={MbtiResult} />
        </HashRouter>
      </BackStyle>
  );
}

// exact를 주면 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트를 보여준다.
// -> exact를 하지 않으면 밑에 question에도 / 가 있기 때문에 한페이지에 같이 나옴
export default App;