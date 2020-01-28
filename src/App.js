import React, {useState, useEffect} from 'react';
import qs from 'qs'
import Nav from './components/Nav'
import Home from './components/Home'
import Users from './components/Users'
import './App.css';
import axios from 'axios'
import { getHash } from './utils/utils'

const API = 'https://acme-users-api-rev.herokuapp.com/api'

function App() {


  const [ users, setUsers ] = useState([])
  const [ params, setParams ] = useState(qs.parse(getHash()));

  useEffect(()=> { //get users
    axios.get(`${API}/users`)
    .then( response => {
      console.log(response.data)
      setUsers(response.data)})
  }, [])


  useEffect(()=> { //refresh every hashchange
    window.addEventListener('hashchange', ()=> {
      setParams(qs.parse(getHash()));
    });
    setParams(qs.parse(getHash()));
  }, []);

  return (
    <div className="App">
      <Nav />
      {params.view === undefined && <Home />}
      {params.view === 'users' && <Users users={users} />}
    </div>
  );
}

export default App;
