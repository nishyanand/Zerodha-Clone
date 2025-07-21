import React from 'react';

import smallcaseLogo from '../../assets/smallcaseLogo.png';
import streakLogo from '../../assets/streakLogo.png';
import zerodhaFundhouse from '../../assets/zerodhaFundhouse.png';
import goldenpiLogo from '../../assets/goldenpiLogo.png';
import dittoLogo from '../../assets/dittoLogo.png';

function Universe() {
    return ( 
        <div className="container mt-5">
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src={smallcaseLogo} width={100}/>
                    <p className='text-small text-muted'>Thematic investing platform.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src={streakLogo} width={100}/>
                    <p className='text-small text-muted'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="/assets/sensibullLogo.svg" alt="Sensibull Logo" width={100} />
                    <p className='text-small text-muted'>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src={zerodhaFundhouse} width={100}/>
                    <p className='text-small text-muted'>Asset management</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src={goldenpiLogo} width={100}/>
                    <p className='text-small text-muted'>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src={dittoLogo} width={100}/>
                    <p className='text-small text-muted'>Insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5'style={{width:"20%", margin:"0 auto"}}>Sign up now</button>
            </div>
        </div>
     );
}

export default Universe;