
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
        <h1>가상화폐 매매 & 채팅</h1>
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
          <Content style={{fontSize:13}}>
            <div>
              <h3>✔ 프로젝트 기획</h3><br/>
              가상화폐를 채팅과 함께 좀 더 재밌게 이용할 수 있도록 구현해본 웹 사이트 입니다.
            </div><br/>
            <h3>✔ 상세 설명</h3><br/>
            <div>
              <h3>◾ 메인페이지</h3><br/>
              <p> 가상화페 라이브러리를 활용, 가상화페 전체 순위와 변동사항을 테이블 형식으로 출력함</p>
            </div><br/>
            <div>
              <h3>◾ 차트 조회</h3><br/>
              <p> 구글차트 API 활용, 가상화폐 정보와 날짜형식을 입력하여 차트로 출력</p>
            </div><br/>
            <div>
              <h3>◾ 투자내역 조회</h3><br/>
              <p> 업비트 API를 활용, 이용자의 투자내역 정보를 가져와서 평균금액, 평가순익 등을 계산하여 출력</p>
            </div><br/>
            <div>
              <h3>◾ 가상화페 매매</h3><br/>
              <p> 업비트 API를 활용, 매매할 가상화폐 이름과 금액을 입력하여 매수, 매도가 가능하도록 구현함.</p>
            </div><br/>
            <div>
              <h3>◾ 뉴스 페이지</h3><br/>
              <p> 파이썬 라이브러리 활용, 뉴스 사이트의 텍스트와 이미지를 크롤링하여 json 파일로 저장 후 화면에 리스트 형식으로 출력함</p>
            </div><br/>
            <div>
              <h3>◾ 채팅창</h3><br/>
              <p> 웹소켓을 활용, 클라이언트와 서버가 양방향 통신하여 채팅기능을 사용할 수 있도록 구현함</p>
            </div><br/>

           
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