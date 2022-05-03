import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useContext, UserContext } from 'react';

import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { ListCoins } from './pages/ListCoins';


function App() {
  const value = useContext(UserContext);
  console.log(value);


  return (
    <div className="App">
      <Routes>
        {/* <Route path={"/projects/add"} element={<IsPrivate><AddProject /></IsPrivate>} /> */}
        <Route path={"/coins"} element={<ListCoins />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;