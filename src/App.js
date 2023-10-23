
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>

        <Routes>
          <Route exact path='/' element={<><Navbar /><News pageSize={6} key={"home"} category={"general"} country={"in"} /></>}></Route>
          <Route exact path='/business' element={<><Navbar /><News pageSize={6} key={"business"} category={"business"} country={"in"} /></>}></Route>
          <Route exact path='/entertainment' element={<><Navbar /><News pageSize={6} key={"entertainment"} category={"entertainment"} country={"in"} /></>}></Route>
          <Route exact path='/general' element={<><Navbar /><News pageSize={6} category={"general"} key={"general"} country={"in"} /></>}></Route>
          <Route exact path='/health' element={<><Navbar /><News pageSize={6} category={"health"} key={"health"} country={"in"} /></>}></Route>
          <Route exact path='/science' element={<><Navbar /><News pageSize={6} category={"science"} key={"science"} country={"in"} /></>}></Route>
          <Route exact path='/sports' element={<><Navbar /><News pageSize={6} category={"sports"} key={"sports"} country={"in"} /></>}></Route>
          <Route exact path='/technology' element={<><Navbar /><News pageSize={6} category={"technology"} key={"technology"} country={"in"} /></>}></Route>
        </Routes>

      </Router>

    );
  };
}

