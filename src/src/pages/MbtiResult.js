import styled from 'styled-components';
// import { useParams, Link } from 'react-router-dom';
import React, {Component} from 'react';
import { Link } from 'react-router-dom'

const TemplateBlock = styled.div`
  width: 700px;
  height: 780px;
  /* position: relative; //배경위에 나타나게 하려고 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: 0 auto; // 페이지 중앙에 나타나도록 설정
  margin-top: 100px;
  padding-top: 25px;
  border:  2px solid black;
  text-align: center; // 부모 요소에 text-align 속성을 추가하면 자식에게 모두 적용
  div {
      font-size: 18px
  }
  h1 {
      margin: 0 0 30px 0;
      display: inline-block;
  }
  .text {
      display: inline-block;
  }
  .place {
      font-size: 25px;
      margin-bottom: 30px;
  }
  .imgtest{
      /* opacity: 0.5; //투명도 */
      border-radius: 100%;
      height: 160px;
      margin: 0 10px 25px 10px;
  }
`;

const ReturnButton = styled.button`
  width: 150px;
  height: 35px;
  margin-top: 300px;
  border-radius: 16px;
  border: 0; //버튼 테두리 없애기
  background-color: #e9ecef;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  background:  #D9E8F5;
  &:hover {
      background: #A5C5F5;
  }
`;
// type1: 50,type2: 20,type3: 10,type4: 30
// ========= 데이터 불러오기

// const result = async(paged) => {
//   // const { paged } = useParams();
//   const data = await axios.get("http://localhost:3001/result", {
//       params: {
//           type1: paged,
//       }
//   })
//   console.log(data)
// }

//   console.log(result(50))
// => Promise {<pending>} 뜸



class ResultPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      answer: ''
    };
  }

  componentDidMount() {
    console.log('did Mount')
    fetch('//localhost:3001/result?type1=50&type2=20&type3=10&type4=30').then((data) => { //점수가 들어왔다고 가정하고 작성
      if(data.ok) {
        data.json().then((res) => {
        this.setState({data: res});

        this.selectbox(res.result);

        console.log(res.result)
        // console.log(res.result[0])
        // console.log(this.state.data.result[0].title)
        // console.log(this.state.data)

          console.log(this.state.result) //화면에 나오는거
        })
      }
    });
  }

  selectbox(result) {
    let list = '';
    result.forEach((item) => {
      console.log(item)
      // list =  `${item.context} + ${item.place} + ${item.title}`
      list =  <>
                <div >당신의 여행 MBTI는 </div>
                <h1> {item.title} </h1>
                <div className="text"> &nbsp; 입니다. </div>
                <div> 성격과 어울리는 여행지는? </div>
                <div className="place"> {item.place} ✈️ </div>
                <img className="imgtest" src={item.imageUrl} alt="profile"></img>
                <img className="imgtest" src={item.imageUrl2} alt="profile"></img>
                <div> &#128204; {item.context}</div>
              </>
    })
    console.log(list)
    this.setState({result: list});
  }
  // ===========
  render = () =>
    <>
      <TemplateBlock>
          {console.log('render')}
          {this.state.data.result !== undefined && this.state.result}
          <Link to="/">
            <ReturnButton> 다시하기 </ReturnButton>
          </Link>
      </TemplateBlock>
    </>

// list = list + a
}

  export default ResultPage