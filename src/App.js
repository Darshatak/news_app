
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = () => {
  const apiKey = process.env.REACT_APP_NEWS;
  const [progress, setProgress] = useState(0)

  return (
    <Router>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path='/' element={<><News pageSize={6} apiKey={apiKey} setProgress={setProgress} key={"home"} category={"general"} country={"in"} /></>}></Route>
        <Route exact path='/business' element={<><News pageSize={6} apiKey={apiKey} setProgress={setProgress} key={"business"} category={"business"} country={"in"} /></>}></Route>
        <Route exact path='/entertainment' element={<><News pageSize={6} apiKey={apiKey} setProgress={setProgress} key={"entertainment"} category={"entertainment"} country={"in"} /></>}></Route>
        <Route exact path='/general' element={<><News pageSize={6} apiKey={apiKey} setProgress={setProgress} category={"general"} key={"general"} country={"in"} /></>}></Route>
        <Route exact path='/health' element={<><News pageSize={6} apiKey={apiKey} setProgress={setProgress} category={"health"} key={"health"} country={"in"} /></>}></Route>
        <Route exact path='/science' element={<><News pageSize={6} apiKey={apiKey} setProgress={setProgress} category={"science"} key={"science"} country={"in"} /></>}></Route>
        <Route exact path='/sports' element={<><News pageSize={6} apiKey={apiKey} setProgress={setProgress} category={"sports"} key={"sports"} country={"in"} /></>}></Route>
        <Route exact path='/technology' element={<><News pageSize={6} apiKey={apiKey} setProgress={setProgress} category={"technology"} key={"technology"} country={"in"} /></>}></Route>
      </Routes>

    </Router>

  );

}

export default App;