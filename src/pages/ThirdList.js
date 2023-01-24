import styled from "styled-components";
import SlideBox from "../component/SlideBox";
import Img1 from "../images/third/1.png";
import Img2 from "../images/third/2.png";
import Img3 from "../images/third/3.png";

const ThirdList = () =>{
  return(
    <Component>
      <Title>
        <h1>교통정보 사이트</h1>  
        <p>2022.12 - 2023.01</p>   
      </Title>
      <Main>
        <section>
          <SlideBox img={[Img1,Img2,Img3]}></SlideBox>
        </section>
        <section>
          <Skill>
            <div>
              <div style={{width:100}}><b>✔ 주요기능</b></div>
              <div style={{textAlign:'left',width:'70%'}}>사고정보, 돌발정보 조회하기, CCTV 조회 및 영상 재생하기, 목적지 경로탐색하기, 날씨정보 조회하기</div>
            </div>
            <div>
              <div style={{width:100}}><b>✔ GitHub</b></div>
              <div style={{textAlign:'left',width:'70%'}}><a style={{textDecoration: "none",color:'tomato',fontWeight:'bold'}} href="https://github.com/Jeong-Yoon-Hwan/ProjectB_.git">https://github.com/Jeong-Yoon-Hwan/ProjectB_.git</a></div>
            </div>
            <div>
              <div style={{width:100}}><b>✔ Front-end</b></div>
              <div style={{textAlign:'left',width:'70%'}}>react, typescript</div>
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
              <h3>✔ 프로젝트 기획</h3>
              도로교통정보 api 를 활용하여 대전지역 교통 정보 사이트를 구현하였습니다.
            </div><br/>
            <h3>✔ 상세 설명</h3><br/>
            <div>
              <h3>◾ 메인 페이지</h3><br/>
              <p> 네이버 지도 API를 활용, 현재 위치의 지도와 날씨정보, 돌발 사고정보를 확인할 수 있도록 구현하였습니다. </p>
              <p>하단탭의 버튼을 클릭하면 해당하는 정보의 위치에 마커를 표시하도록 구현하였습니다.</p>
              <p>네이버 검색 API를 활용하여 출발지와 목적지를 검색하고, 해당하는 경로를 조회할 수 있도록 구현하였습니다.</p>
            </div><br/>
            <div>
              <h3>◾ CCTV 조회</h3><br/>
              <p> 지도에 CCTV 위치별로 마커를 표시하고, 클릭했을 때 해당 REST API 주소로 요청하여 영상을 재생할 수 있도록 구현하였습니다.</p>
            </div><br/>
            <div>
              <h3>◾ 돌발, 사고 조회</h3><br/>
              <p> 돌발, 사고 위치별로 마커를 표시하고 클릭했을때 해당 위치와 사고내용 등의 정보를 확인할 수 있도록 출력하였습니다.</p>
            </div><br/>
            
          </Content>
        </section>
      </Main>
    </Component>
  )
}
export default ThirdList;

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