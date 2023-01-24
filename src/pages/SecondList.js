import styled from "styled-components";
import SlideBox from "../component/SlideBox";
import Img1  from "../images/second/1.png";
import Img2 from "../images/second/2.png";
import Img3 from "../images/second/3.png";
import Img4 from "../images/second/4.png";

const SecondList = () =>{
  
  return(
    <Component>
      <Title>
        <h1>주식 정보 사이트</h1>
        <p>2022.10 - 2022.11</p>   
      </Title>
      <Main>
        <section>
          <SlideBox img={[Img1,Img2,Img3,Img4]}></SlideBox>
        </section>
        <section>
          <Skill>
            <div>
              <div style={{width:100}}><b>✔ 주요기능</b></div>
              <div style={{textAlign:'left',width:'70%'}}>주식종목 차트조회하기, 최근거래량 순위, 종가 순위 조회하기, 동향뉴스 조회하기</div>
            </div>
            <div>
              <div style={{width:100}}><b>✔ GitHub</b></div>
              <div style={{textAlign:'left',width:'70%'}}><a style={{textDecoration: "none",color:'tomato',fontWeight:'bold'}} href="https://github.com/Jeong-Yoon-Hwan/Stock_ProjectA.git">https://github.com/Jeong-Yoon-Hwan/Stock_ProjectA.git</a></div>
            </div>
            <div>
              <div style={{width:100}}><b>✔ Front-end</b></div>
              <div style={{textAlign:'left',width:'70%'}}>react, typescript</div>
            </div>
            <div>
              <div style={{width:100}}><b>✔ Back-end</b></div>
              <div style={{textAlign:'left',width:'70%'}}>python, flask</div>
            </div>
            <div>
              <div style={{width:100}}><b>✔ Database</b></div>
              <div style={{textAlign:'left',width:'70%'}}>mariadb</div>
            </div>
            
          </Skill>
          <Content style={{fontSize:13}}>
            <div>
              <h3>✔ 프로젝트 기획</h3><br/>
              주식 데이터를 활용하여 여러가지 주식 정보를 조회할 수 있도록 구현한 사이트 입니다.
            </div><br/>
            <h3>✔ 상세 설명</h3><br/>
            <div>
              <h3>◾ 종목 검색</h3><br/>
              <p> 조회할 주식 종목을 검색하여 차트와 시가, 거래량 등의 정보를 조회할 수 있도록 출력함</p>
            </div><br/>
            <div>
              <h3>◾ 이달의 추천주식</h3><br/>
              <p>  DB 데이터 활용,  코스피, 코스닥 기준으로 이달 가장 종가가 높았던 순위를 보여주도록 출력함.</p>
            </div><br/>
            <div>
              <h3>◾ 거래량 순위</h3><br/>
              <p>  DB 데이터 활용, 거개량이 가장 높았던 순위를 조회할 수 있도록 출력함</p>
            </div><br/>
            
          </Content>
        </section>
      </Main>
    </Component>
  )
}
export default SecondList;

const Component = styled.div`
  width:100%;
  height:100%;
  background-color: white;
  display: flex;
  flex-direction:column;
  gap:20px;
  border-radius: 10px;
  
`

//제목
const Title = styled.div`
  width:100%;
  height:100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:20px;
  padding:10px;

  & > h1 {
    font-family: var(--font-DoHyeon);
  }
  & > p {
    color:gray;
  }
`

// 메인화면, 위는 슬라이드 박스, 아래는 내용설명
const Main = styled.div`
  width:100%;
  height:max-content;
  display: flex;
  flex-direction: column;

  //위 슬라이드박스 화면
  & > section {
    width:100%;
    height: max-content;
    //background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  //아래 설명화면
  & > section:nth-child(2){
    padding:20px;
    background-color: white;

    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1100px) {
        flex-direction: column;
        width:100%;
        gap:20px;
    }
  }
`

//기술정보 설명
const Skill = styled.div`
  width:40%;
  height:100%;
  display: flex;
  flex-direction: column;
  color:#333;
  font-size: 15px;
  gap:20px;
  border-right: 2px solid gray;
  padding-right: 10px;
  padding-bottom: 20px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: start;
    & > a {
      text-decoration-line: none;
      
    }
  }

  @media screen and (max-width: 1100px) {
    width:100%;
    border-bottom: 2px solid gray;
    border-right: none;
  }

`

//내용 설명
const Content = styled.div`
  color:#333;
  font-weight: bolder;
  width:60%;
  height:100%;
  padding-left:20px;
  display: flex;
  flex-direction: column;
  gap:5px;

  @media screen and (max-width: 1100px) {
  width:100%;
}


`