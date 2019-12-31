import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './home.js';
import About from './about.js';
import Projects from './projects.js';
import Navigation from './nav.js';
import Sky from 'react-sky';
import mi from "./home1.jpg"
import mi1 from "./home.jpg"
import mi2 from "./home2.jpg"
import mi3 from "./home3.jpg"
import mi4 from "./home4.jpg"

function App() {
  return (
    <React.Fragment>
    <Navigation/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Projects" component={Projects}/>
        </Switch>
        <Sky
          images={{
            0: mi,
            1: mi1,
            2: mi2,
            3: mi3,
            4: mi4
          }}
          how={50}
          time={20}
          size={'50px'}
        />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
