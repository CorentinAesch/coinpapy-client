import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { UserContext } from './context/user.context';

import { useContext } from 'react';

import { Appbar } from './components/Appbar';
/* import { Footer } from './components/Footer'; */
import { HomePage } from './pages/HomePage';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { ListCoins } from './pages/ListCoins';
import { ListTransaction } from './pages/ListTransaction'
import { AddTransaction } from './pages/AddTransaction';


function App() {

  useContext(UserContext);

  return (
    <>
      <Appbar />  
      <Routes>      
          <Route path="/" element={ <HomePage /> } />
          <Route path={"/coins"} element={<ListCoins />} />
          <Route path={"/transactions"} element={<ListTransaction />} />
          <Route path={"/transactions/create"} element={<AddTransaction />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;