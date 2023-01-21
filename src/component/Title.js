import styled from "styled-components"

const Title = () =>{
  return(
    <Component>
      <div>
        Jeong Yoon Hwan<br></br>
        Portfolio
      </div>
    </Component>
  )
}

export default Title;

const Component = styled.div`
  width:100%;
  height:30%;
  display:flex;
  justify-content: center;
  align-items: center;
  color:white;
  font-size: 2rem;
  font-weight:bold;
  text-align:center;
  font-family: var(--font-DoHyeon);
`