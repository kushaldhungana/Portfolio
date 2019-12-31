import React from 'react';
import styled from 'styled-components';
//import Image from './home.jpg';
const Styles= styled.div`
    .text{
      position:absolute;
      top: 50%;
      left:50%;
      margin-right: -50%;
      transform: translate(-50%,-50%);
      color: skyblue;
    }
    #email{
      color:skyblue;
    }

`;
function Home(){
  return(
    <Styles>
    <div className='text'>
      <h1> I am Kushal Dhungana </h1>
      <h3> Computer science enthusiast </h3>
      <h5> Hit me up at <a id="email" href="mailto:kushal.dhungana@gmail.com">kushal.dhungana@gmail.com</a></h5>
    </div>
    </Styles>
  )
}

export default Home;
