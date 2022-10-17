
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './routes/Navigation';
import loginContext from './context.js/loginContext';
import { useState } from 'react';

export default function App() {
 
  const [token,setToken] = useState(localStorage.getItem("token"));

  return (

    <loginContext.Provider value={{token,setToken}}>
      <Navigation/>
    </loginContext.Provider>
  );
}

