
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS;

  state = {
    progress: 0
  }

  setProgress = (progress) => this.setState({ progress })

  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path='/' element={<><News pageSize={6} apiKey={this.apiKey} setProgress={this.setProgress} key={"home"} category={"general"} country={"in"} /></>}></Route>
          <Route exact path='/business' element={<><News pageSize={6} apiKey={this.apiKey} setProgress={this.setProgress} key={"business"} category={"business"} country={"in"} /></>}></Route>
          <Route exact path='/entertainment' element={<><News pageSize={6} apiKey={this.apiKey} setProgress={this.setProgress} key={"entertainment"} category={"entertainment"} country={"in"} /></>}></Route>
          <Route exact path='/general' element={<><News pageSize={6} apiKey={this.apiKey} setProgress={this.setProgress} category={"general"} key={"general"} country={"in"} /></>}></Route>
          <Route exact path='/health' element={<><News pageSize={6} apiKey={this.apiKey} setProgress={this.setProgress} category={"health"} key={"health"} country={"in"} /></>}></Route>
          <Route exact path='/science' element={<><News pageSize={6} apiKey={this.apiKey} setProgress={this.setProgress} category={"science"} key={"science"} country={"in"} /></>}></Route>
          <Route exact path='/sports' element={<><News pageSize={6} apiKey={this.apiKey} setProgress={this.setProgress} category={"sports"} key={"sports"} country={"in"} /></>}></Route>
          <Route exact path='/technology' element={<><News pageSize={6} apiKey={this.apiKey} setProgress={this.setProgress} category={"technology"} key={"technology"} country={"in"} /></>}></Route>
        </Routes>

      </Router>

    );
  };
}

