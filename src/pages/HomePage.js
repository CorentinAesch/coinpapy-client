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
        <section className="mt-5 py-2 py-md-6">
          <div className="container">
              <div className="align-items-center">
                  <div className="text-center">
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
              </div>  
            </div>
        </section>

        <section className="py-4 py-md-5">
            <div className="container">
                <div className="col-12 text-center">
                    <h2 className="h1">Follow Any Coin You Want</h2>
                    <p className="lead mb-4">Accuratly follow your favourite currency.</p>
                </div> 
                <div className="d-flex justify-content-between">
                  {coins && coins.map((coin) => {
                    return <img key={coin._id} className="p-2 w-50" src={coin.image} alt="bitcoin"/>
                  })}
                </div>
            </div>
        </section>
      </>
    );
}
   
