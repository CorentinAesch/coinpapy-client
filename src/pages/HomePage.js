import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getAllCoins } from "../api";

export const HomePage = () => {
  const [coins, setCoins] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
        const response = await getAllCoins();
        setCoins(response.data);
    })();
}, []);

  const formHandler = async (e) => {
    navigate('/signup')
  }

    return (
      <>
        <section className="py-4 py-md-5">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-12 col-lg-5  text-center">
                      <h1 className="display-2">Your number 1 Crypto Tracker.</h1>
                      <p className="lead">Track and manage your portfolios.</p>
                      <form onSubmit={ formHandler } method="GET" className="mt-4 d-flex justify-content-center">
                          <div className="form-floating me-2 col-8 col-lg-7">
                              <input type="email" className="form-control shadow-sm" id="email" name="email" placeholder="Email" required />
                              <label>Email</label>
                          </div>
                          <button className="btn btn-primary">Get Started</button>
                      </form>
                      <p className="small text-muted mt-3 col-md-9 mx-auto">Coinpapy is not a trading platform and is not responsible for gains or losses of your portfolios.</p>
                  </div>
                  <div className="col-12 col-lg-7">
                      <img src="/public/images/Homepage-exch.png" alt="exchange" className="w-100"/>
                  </div>
              </div>  
            </div>
        </section>

        <section className="py-4 py-md-5">
            <div className="container">
                <div className="col-12 text-center">
                    <h2 className="h1">Follow Any Coin You Want</h2>
                    <p className="lead mb-4">Accuratly follow your favourite currency.</p>
                </div> 
                <div class="row">
                  <img class="col" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="bitcoin"/>
                  <img class="col" src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" alt="ethereum"/>
                  <img class="col" src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850" alt="bnb"/>
                  <img class="col" src="https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860" alt="cardano"/>
                </div> 
                <div class="row">
                  <img class="col" src="https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422" alt="solana"/>
                  <img class="col" src="https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446" alt="shiba"/>
                </div>
                  
            </div>
        </section>
      </>
    );
}
   
