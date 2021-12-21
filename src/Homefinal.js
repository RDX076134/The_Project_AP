import React, {useState, useEffect, useRef} from 'react';
import Preloader from './preloader';
import Home from './home.js';

export default function Homefinal() {
    const [preloader, setPreloader] = useState(true);

    const [timer, setTimer] = useState(4);
    const id = useRef(null);

  const clear = () =>{
    window.clearInterval(id.current);
    setPreloader(false);
  }

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer -1)
    }, 1000)
  }, []);

  useEffect(() => {
    if (timer ===0)
    clear();
  }, [timer]);
    return (
        <div>
            {preloader ? <Preloader/> : <Home/>}
        </div>
    )
}
