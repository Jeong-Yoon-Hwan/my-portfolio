
import styled from "styled-components";
import SlideBox from "../component/SlideBox";
import firstImg1 from "../images/first/1.png";
import firstImg2 from "../images/first/2.png";
import firstImg3 from "../images/first/3.png";
import firstImg4 from "../images/first/4.png";


const FirstList = ()=>{
  
  return(
    <Component>
      <Title>
        <h1>가상화폐 매매 + 채팅 사이트</h1>
        <p>2022.09 - 2022.10</p>   
      </Title>
      <Main>
        <section>
          <SlideBox img={[firstImg1,firstImg2,firstImg3,firstImg4]}></SlideBox>
        </section>
        <section>
          <Skill>
            <div>
              <div style={{width:100}}><b>✔ 주요기능</b></div>
              <div style={{textAlign:'left',width:'70%'}}>가상화폐 정보 조회하기, 가상화폐 매수, 매도하기, 뉴스 조회하기, 채팅으로 소통하기</div>
            </div>
            <div>
              <div style={{width:100}}><b>✔ GitHub</b></div>
              <div style={{textAlign:'left',width:'70%'}}><a style={{textDecoration: "none",color:'tomato',fontWeight:'bold'}} href="https://github.com/Jeong-Yoon-Hwan/KDT-ProjectC-Team7.git">https://github.com/Jeong-Yoon-Hwan/KDT-ProjectC-Team7.git</a></div>
            </div>
            <div>
              <div style={{width:100}}><b>✔ Front-end</b></div>
              <div style={{textAlign:'left',width:'70%'}}>react, javascript</div>
            </div>
            <div>
              <div style={{width:100}}><b>✔ Back-end</b></div>
              <div style={{textAlign:'left',width:'70%'}}>node.js, express</div>
            </div>
            <div>
              <div style={{width:100}}><b>✔ Database</b></div>
              <div style={{textAlign:'left',width:'70%'}}>mysql</div>
            </div>
            
          </Skill>
          <Content>
            <div>가상화폐를 채팅과 함께  좀 더 재밌게 이용할 수 있도록 구현해본 웹 사이트 입니다.</div><br></br>
            <div>업비트에서 제공해주는 API를 활용하면서 데이터를 가공하고 출력하는데 많은 도움이 되었습니다.</div>
            <br></br>
            <div>차트 조회와 뉴스 조회 기능을 넣어, 정보를 제공받을 수 있도록 만들었습니다.</div>
            
            <div>뉴스페이지를 구현하면서 크롤링을 하기 위해 파이썬을 접하게 되었습니다. </div>
            <div>데이터를 한꺼번에 가져오기때문에 재가공이 필요했는데 객체화 시키는 연습이 많이 되어 의미있었던 것 같습니다.</div><br></br>

            <div>채팅기능을 구현하면서 웹소켓으로 클라이언트와 서버간의 통신을 구현하게 되었고, </div>
            <div>양방향 통신이 어떻게 이루어지는지 공부할 수 있었습니다.</div>
          </Content>
        </section>
      </Main>
    </Component>
    
  )
}
export default FirstList;

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