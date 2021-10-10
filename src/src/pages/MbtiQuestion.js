import React, {Component} from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addPageNumber } from '../reducers/counter/action'

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
  text-align: center;
  div { // 답변 부분
    margin: 40px 0px 40px 0px;
  }
  h1 {
    text-align: center;
    margin: 50px 30px 50px 30px;
  }
`;

const NextButton = styled.button`
  width: 150px;
  height: 35px;
  margin: 10px;
  /* margin : auto; */
  /* display: block; // margin : auto 로 가운데 정렬하기 위해선 block 이여야 된다. => 가운데 정렬을 부모에 text-align: center; 로 해결*/
  /* margin-top: 0px; */
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
    fetch(`//localhost:3001/question/${this.props.count}`).then((data) => {
      if(data.ok) {
        data.json().then((res) => {
          this.setState({data: res});

          this.selectbox(res.answer);
          console.log(this.state.data)
          console.log(res.answer)
          console.log(this.props.count)
        })
      }
    });
  }

  selectbox(answer) {
    let list = '';
    answer.forEach((item, itemIndex) => {
      list += `${itemIndex + 1} ) ${item[`type${itemIndex + 1}`]}`;
    })
    this.setState({answer: list});
  }
// ===========
  render = () =>
    <>
      <TemplateBlock>
          {console.log('renderrrr')}
          <h1>
            { this.state.data !== undefined && this.state.data.question }
          </h1>
          <div>
            { this.state.data.answer !== undefined && this.state.answer }
          </div>

          {/* <Link to="/result"> */}
            <NextButton onClick={() => this.props.addPageNumber()}> 다음 </NextButton>
          {/* </Link> */}

          <p>페이지 수 : {this.props.count}</p>
          <button onClick={() => this.props.addPageNumber()}>페이지 넘기기</button>

      </TemplateBlock>
    </>

}

//state를 funtion 형태로 넘겨줘야한다. -> redux connect 공식문서 참고, reducers와 연결
const mapStateToProps = (state) => {
  return {
    count: state.count // count 가 props로 전달 된다.
  }
}

//state.count + 1 수행하는걸 연결해주기 위해 dispatch 사용
const mapDispatchToProps = (dispatch) => {
  return {
    addPageNumber: () => dispatch(addPageNumber())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
