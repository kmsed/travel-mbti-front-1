import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import mg from '../../src/enfj.png'


const TemplateBlock = styled.div`
  width: 700px;
  height: 800px;
  /* position: relative; //배경위에 나타나게 하려고 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: 0 auto; // 페이지 중앙에 나타나도록 설정
  margin-top: 50px;
  border:  2px solid black;
  text-align: center;
`;

const HeadBlock = styled.div`
  padding: 40px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  text-align: center;
  h1 {
      margin: 0 0 25px;
      /* margin-bottom: 20px; */
      font-size: 36px;
      /* color: #343a40; */
      font-weight: 500;
  }
  .tag {
      margin-top: 15px;
      color: #868e96;
      font-size: 21px;
  }
`;

const ImgBlock = styled.div`
  background-size: contain;
  background-position: center center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  /* padding: 10px; */
  .size {
      width: 125px;
      height: 123px;
      margin: 10px;
  }
  /* &:hover {
      background-image: url(${mg});
  } */
`;

const StartButton = styled.button`
  width: 700px;
  height: 55px;
  /* display: block; */
  /* margin : auto; //이거 대신 부모에 text-align으로 정렬 */
  cursor: pointer;
  margin-top: 15px;
  font-weight: bold;
  font-size: 18px;
  /* color: white; */
  border-radius: 16px;
  border: 0; //버튼 테두리 없애기
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background: #D9E8F5;
  border: solid 1px #91D7F2;
  &:hover {
      background: #A5C5F5;
  }
`;

const MbtiStart = () => {
  return (
    <>
      <TemplateBlock>
          <HeadBlock>
              <h1>나의 여행 유형은?</h1>
              <div>자신의 MBTI 성격 유형으로 여행지를 추천받아 보세요💕</div>
              <div>나와 여행 궁합이 잘 맞는 친구도 알 수 있습니다!</div>
              <div className="tag">#성격유형테스트 &nbsp; #나와 어울리는 동행자  &nbsp; #계획 무계획</div>
          </HeadBlock>
          <ImgBlock>
            <img className="size" src={process.env.PUBLIC_URL+"/images/enfj.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/isfp.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/estp.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/istp.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/estp.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/infp.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/infj.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/enfp.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/istj.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/esfj.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/isfj.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/estj.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/entj.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/entp.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/intj.png"} alt="profile"></img>
            <img className="size" src={process.env.PUBLIC_URL+"/images/intp.png"} alt="profile"></img>
          </ImgBlock>

          <Link to="/question">
            <StartButton>시작하기</StartButton>
          </Link>
      </TemplateBlock>
    </>
  )
}

export default MbtiStart;
