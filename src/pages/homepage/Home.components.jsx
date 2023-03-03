import React, { Fragment } from 'react';
import PaypalImg from '../../assests/images/PaypelandBitcoin.jpg';
import MinerBitcoinImg from '../../assests/images/minerBitcoin.jpg';
import ItalianImg from '../../assests/images/italy-cryptocurrency-tax.jpeg';
import MicroStrategyImg from '../../assests/images/MicroStrategy.jpeg';
import MangoMarketImg from '../../assests/images/Mango-Markets-Exploiter-Arrested-In-Puerto-Rico.jpg';
import { Link } from 'react-router-dom';
import './home.styles.css';

const Home = () => {
    return (
        <Fragment>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='card-div col-md-6 col-lg-3 col-sm-1'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={PaypalImg} className="card-img-top" alt="PaypalImage" />
                            <div className="card-body">
                                <h5 className="card-title">PayPal enables transfer of digital currencies to external wallets</h5>
                                <p className="card-text">The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform....</p>
                                <Link to="/news/news-one" className="btn btn-primary">Go to News</Link>
                            </div>
                        </div>
                    </div>
                    <div className='card-div col-md-6 col-lg-3 col-sm-1'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={ItalianImg} className="card-img-top" alt="PaypalImage" />
                            <div className="card-body">
                                <h5 className="card-title">Italian Parliament Approves 26% Crypto-Gains Tax in 2023 Budget</h5>
                                <p className="card-text">Italian Prime Minister Giorgia Meloni's 2023 expansionary budget – which was completed in .....</p>
                                <Link to='news/news-two' className="btn btn-primary">Go to News</Link>
                            </div>
                        </div>
                    </div>
                    <div className='card-div col-md-6 col-lg-3 col-sm-1'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={MicroStrategyImg} className="card-img-top" alt="PaypalImage" />
                            <div className="card-body">
                                <h5 className="card-title">Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 B TC</h5>
                                <p className="card-text">Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases....</p>
                                <Link to="news/news-three" className="btn btn-primary">Go to News</Link>
                            </div>
                        </div>
                    </div>
                    <div className='card-div col-md-6 col-lg-4 col-sm-1'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={MinerBitcoinImg} className="card-img-top" alt="PaypalImage" />
                            <div className="card-body">
                                <h5 className="card-title">Bitcoin miners’ revenue dropped in 2022</h5>
                                <p className="card-text">Bitcoin, which is trading at $16,721 at press time, has been on a downward spiral alongside other cryptocurrencies....</p>
                                <Link to="news/news-four" className="btn btn-primary">Go to News</Link>
                            </div>
                        </div>
                    </div>
                    <div className='card-div col-md-6 col-lg-4 col-sm-1'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={MangoMarketImg} className="card-img-top" alt="PaypalImage" />
                            <div className="card-body">
                                <h5 className="card-title">Mango Markets Exploiter Eisenberg Arrested in Puerto Rico</h5>
                                <p className="card-text">The investor drained $110 million in cryptocurrencies from the platform.Avraham Eisenberg ....</p>
                                <Link to="news/news-five" className="btn btn-primary">Go to News</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home
