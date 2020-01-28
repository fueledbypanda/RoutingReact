import React, {useState, useEffect} from 'react';
import qs from 'qs'
import Nav from './components/Nav'
import Home from './components/Home'
import Users from './components/Users'
import './App.css';
import { getHash } from './utils/utils'


function App() {

  const [ params, setParams ] = useState(qs.parse(getHash()));
useEffect(()=> {
  window.addEventListener('hashchange', ()=> {
    setParams(qs.parse(getHash()));
  });
  setParams(qs.parse(getHash()));
}, []);

  return (
    <div className="App">
      <Nav />
      {params.view === undefined && <Home />}
      {params.view === 'users' && <Users />}
    </div>
  );
}

export default App;
