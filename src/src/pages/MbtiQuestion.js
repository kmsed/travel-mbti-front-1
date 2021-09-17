import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const TemplateBlock = styled.div`
  width: 700px;
  height: 500px;
  /* position: relative; //배경위에 나타나게 하려고 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: 0 auto; // 페이지 중앙에 나타나도록 설정
  margin-top: 200px;
  border:  2px solid black;
  div { // 답변 부분
    margin: 40px 0px 40px 92px;
  }
  h1 {
    text-align: center;
    margin: 50px 30px 50px 30px;
  }
`;

const NextButton = styled.button`
  width: 150px;
  height: 35px;
  margin : auto;
  display: block; // margin : auto 로 가운데 정렬하기 위해선 block 이여야 된다.
  margin-top: 0px;
  border-radius: 16px;
  border: 0; //버튼 테두리 없애기
  background-color: #e9ecef;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  background:  #D9E8F5;
  &:hover {
      background: #A5C5F5;
  }
`;

// ========= 데이터 불러오기
class QuestionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      answer: ''
    };
  }

  componentDidMount() {
    console.log('did Mount')
    fetch('//localhost:3001/question/1').then((data) => {
      if(data.ok) {
        data.json().then((res) => {
          this.setState({data: res});

          this.selectbox(res.answer);
          console.log(this.state.data)
          console.log(res.answer)
        })
      }
    });
  }

  selectbox(answer) {
    let list = '';
    answer.forEach((item, itemIndex) => {
      console.log(item[`type${itemIndex + 1}`])
      list += `${itemIndex + 1} ) ${item[`type${itemIndex + 1}`]}`;
    })
    console.log(list)
    this.setState({answer: list});
  }
// ===========
  render = () =>
    <>
      <TemplateBlock>
          {console.log('renderrrr')}
          { this.state.data !== undefined && this.state.data.question }
          { this.state.data.answer !== undefined && this.state.answer }
          <Link to="/result">
            <NextButton> 다음 </NextButton>
          </Link>
      </TemplateBlock>
    </>

}

export default QuestionPage;


