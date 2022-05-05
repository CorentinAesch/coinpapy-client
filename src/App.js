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


function App() {

  const value = useContext(UserContext);
  console.log(value);

  return (
    <>
      <Appbar />  
      <Routes>      
          <Route path="/" element={ <HomePage /> } />
          <Route path={"/coins"} element={<ListCoins />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;