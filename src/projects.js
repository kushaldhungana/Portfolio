import React from 'react';
import styled from 'styled-components';

const Styles= styled.div`
  h1{
    text-align: center;
    text-decoration: underline;
    margin-top: 10px;
  }
  .text3{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%,-50%);
    color: skyblue;
  }
  #red{
    color:skyblue;
  }
`;
function Project(){
  return(
    <Styles>
    <div>
      <h1> Projects</h1>
      <div className="text3">
        <p><h2> Check out my projects at Github. </h2>
          <h5>My github profile is:-<a id="red" href="github.com/kushaldhungana"> github.com/kushaldhungana</a></h5></p>
      </div>
    </div>
  </Styles>
  )
}

export default Project;
