import React from 'react';
import styled from 'styled-components'

const Styles= styled.div`
  .text1{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right:-50%;
    transform: translate(-50%,-50%);
    color: skyblue;
    padding: 30px
  }
  h1{
    margin-top: 10px;
    text-align: center;
    text-decoration: underline;
  }
`;

function About(){
  return(
    <Styles>
    <div>
      <h1> About </h1>
    <div className="text1">
      <p><h2> I am a computer enthusiast. I graduated from Jacobs University with a major in Computer Science
       and a minor in Robotics. I love working with technologies.</h2></p>
    </div>
  </div>
    </Styles>
  )
}

export default About;
