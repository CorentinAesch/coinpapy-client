import './App.css';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './context/user.context';

import { useContext } from 'react';

import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { ListCoins } from './pages/ListCoins';


function App() {

  const value = useContext(UserContext);
  console.log(value);

  return (
    <div className="App">
      <Navbar />  
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path={"/coins"} element={<ListCoins />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;