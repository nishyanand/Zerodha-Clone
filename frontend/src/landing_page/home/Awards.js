import React from 'react';
import pressLogos from '../../assets/pressLogos.png';

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="/assets/largestBroker.svg" alt="largest broker" className="img-fluid" />
        </div>
        <div className="col-6 p-5 mt-5">
            <h1>Largest stock broker in India</h1>
            <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
            <div className="row">
                <div className="col-6">
                    <ul>
                <li>
                    <p>Futures and Options</p>
                </li>
                <li>
                    <p>Commodity derivatives</p>
                </li>
                <li>
                    <p>Currency derivatives</p>
                </li>
            </ul>
                </div>
                <div className="col-6">
                    <ul>
                        <li>                     
                            <p>Stocks & IPOs</p>                 
                        </li>                
                        <li>                     
                            <p>Direct mutual funds</p>                 
                        </li>                 
                        <li>                     
                            <p>Bonds and </p>                 
                        </li>
                    </ul>
                </div>
            </div>
            <img src={pressLogos} alt="press logos" className="img-fluid" style={{width:"100%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
