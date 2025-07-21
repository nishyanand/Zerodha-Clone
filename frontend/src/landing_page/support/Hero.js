import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className=' p-5' id='supportWrapper'>
                <h4>
                    Support Portal
                </h4>
                <a href=''>Track Tickets</a>
            </div>
            <div className='row p-3 m-3'>
                <div className='col-6 p-3'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg, how to do I activate F&O' style={{width:"100%"}}/>
                    <br />
                    <a href=''>Track account opening </a>
                    <a href=''>Track segment activation</a>
            
                    <a href=''>Intraday margins</a>
                    <a href=''>Kite user manual</a>
                </div>
                <div className='col-6 p-3'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li><a href=''>Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
                        <li><a href=''>Revision in expiry day of Index and Stock derivatives contracts</a></li>
                    </ol>
                </div>
                <h4>
                    Support Portal
                </h4>
                <a href=''>Track Tickets</a>
            </div>
        </section>
     );
}

export default Hero;