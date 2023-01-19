import styled from "styled-components";
import { useEffect,useRef,useState } from "react";
import {IoIosArrowBack} from "react-icons/io";
import {IoIosArrowForward} from "react-icons/io";

const SlideBox = (props) =>{
  const slideRef = useRef(null);
  const [currentImgOrder,setCurrentImgOrder] = useState(0);
  const IMG_WIDTH = 500;
  const slideRange = currentImgOrder * IMG_WIDTH;

  useEffect(()=>{
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${slideRange}px)`;
    console.log(currentImgOrder)
  },[currentImgOrder]);

  const [imgArr,setImgArr] = useState([]);
  const movePrev = () =>{
    if(currentImgOrder === 0 ) return;
    setCurrentImgOrder(currentImgOrder - 1)
  }
  const moveNext = () =>{
    if(currentImgOrder === (props.img.length-1)) {
      setCurrentImgOrder(0)
      return
    }
    
    setCurrentImgOrder(currentImgOrder + 1)
  }

  useEffect(()=>{
    console.log(props.img)
    setImgArr(props.img)
  },[])
  return(
    <Component>
      <IoIosArrowBack style={{fontSize:50,cursor:"pointer"}} onClick={movePrev}/>
      <Wrap>
        <Slide ref={slideRef}>
          {
            imgArr.map((item)=>(
            <div key={item}><img src={item}></img></div>
            ))
          }
          {/* <div><img src={props.img[0]}></img></div> */}
          
        </Slide>
      </Wrap>
      <IoIosArrowForward style={{fontSize:50,cursor:"pointer"}} onClick={moveNext}/>
    </Component>
  )

}
export default SlideBox;

const Component = styled.div`
  width:100%;
  height:100%;
  //background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrap = styled.div`
  width: 500px;
  height:300px;
  overflow-x: hidden;
 
`
const Slide = styled.div`
  width:max-content;
  height:300px;
  background-color: aliceblue;
  display: flex;
  
  & > div{
    width:500px;
    height:300px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
    width:100%;
    
  }
}

  
`