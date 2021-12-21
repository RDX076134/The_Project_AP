import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle';
import Homefinal from './Homefinal';
import Media from 'react-media'
import Message from './message';

function App() {
  return (
    <div className="App">
      <Media query="(min-width: 1000px)">
        {(matches) =>{
          return matches ? <Homefinal/> : <Message/>;
        }}
      </Media>
    </div>
  );
}

export default App;
