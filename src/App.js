import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { UserContext } from './context/user.context';

import { useContext } from 'react';

import { Appbar } from './components/Appbar';
import { Footer } from './components/Footer';
import { IsPrivate } from './components/IsPrivate'

import { HomePage } from './pages/HomePage';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { ListCoins } from './pages/ListCoins';
import { WatchList } from './pages/WatchList';
import { Assets } from './pages/Assets';
import { AssetDetails } from './pages/AssetDetails';
import { CoinDetails } from './pages/CoinDetails';
import { NewTransaction } from './pages/AddTransaction';
import { Dashboard } from '@mui/icons-material';


function App() {

  useContext(UserContext);

  return (
    <>
      <Appbar />  
      <Routes>      
          <Route path={"/"} element={ <HomePage /> } />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/dashboard"} element={<IsPrivate><Dashboard /></IsPrivate>}/>
          <Route path={"/watchlist"} element={<IsPrivate><WatchList /></IsPrivate>} />
          <Route path={"/assets"} element={<IsPrivate><Assets /></IsPrivate>} />
          <Route path={"/assets/:assetId"} element={<IsPrivate><AssetDetails /></IsPrivate>} />
          <Route path={"/transactions/create"} element={<IsPrivate><NewTransaction /></IsPrivate>} />
          <Route path={"/coins"} element={<IsPrivate><ListCoins /></IsPrivate>} />
          <Route path={"/coins/:coinId"} element={<IsPrivate><CoinDetails /></IsPrivate>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;