import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Title from './component/Title';
import FirstList from './pages/FirstList';
import SecondList from './pages/SecondList';
import ThirdList from './pages/ThirdList';
import FourthList from './pages/FourthList';
import { motion } from 'framer-motion';

function App() {
  return (
    <Compoenet>
      <HashRouter>
        <Nav>
          <Title></Title>
          <Link to="/first" style={{textDecoration: "none",color:'white',fontWeight:'bold'}}><ListBox>가상화페 매매 & 채팅</ListBox></Link>
          <Link to="/second" style={{textDecoration: "none",color:'white',fontWeight:'bold'}}><ListBox>주식 정보 사이트</ListBox></Link>
          <Link to="/third" style={{textDecoration: "none",color:'white',fontWeight:'bold'}}><ListBox>교통 정보 사이트</ListBox></Link>
          {/* <Link to="/fourth" style={{textDecoration: "none",color:'white',fontWeight:'bold'}}><ListBox>Project 4</ListBox></Link> */}
        </Nav>
        
          <Main>
                <Routes>
                  <Route path="/" element={<FirstList/>}></Route>
                  <Route path="/my-portfolio" element={<FirstList/>}></Route>
                  <Route path="/first" element={<FirstList/>}></Route>
                  <Route path="/second" element={<SecondList/>}></Route>
                  <Route path="/third" element={<ThirdList/>}></Route>
                  <Route path="/fourth" element={<FourthList/>}></Route>
                </Routes>
          </Main>
        
      </HashRouter>
    </Compoenet>
  );
}
export default App;

const Compoenet = styled.div`
  width:100vw;
  height:100vh;
  display: flex;
  font-family: var(--font-NanumGohic);
`

const Main = styled(motion.div)`
  width:100vw;
  height:100vh;
  background-color:#404258;
  display: flex;
  justify-content: center;
  //align-items: center;
  padding: 50px;
  overflow-y: scroll;
`

const Nav = styled.div`
  width:30vw;
  height:100vh;
  background-color: #404258;
  //padding:10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap:10px;
  
`

const ListBox = styled.div`
  width:250px;
  height:calc(70vh / 4);
  background-color: ${(props)=>props.color|| "rgba(255,255,255,0.2)"};
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius: 0px 20px 20px 0px;

  :hover{
    background-color: tomato;
    width:260px;
  }
  transition: background 0.5s ease-in-out;
  transition: width 0.3s ease-in-out;
  
  @media screen and (max-width: 1100px) {
    width:200px;
    :hover{
      width:210px;
    }
  }
`