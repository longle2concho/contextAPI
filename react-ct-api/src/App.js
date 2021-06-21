import './App.css';
import { useState } from 'react';
import Login from './Component/login';
import Profile from './Component/profile';
import {LoginContext} from './Context/Logincontext'


function App() {  
  const [showprofile,SetShowprofile]=useState(false);
  const [username,SetUsername]=useState('');
  return (
    <div className="App">
      <LoginContext.Provider value ={{username,SetUsername,SetShowprofile}}>
      {showprofile?<Profile/>:<Login/>}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
