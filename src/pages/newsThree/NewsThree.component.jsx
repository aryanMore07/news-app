import React, { Fragment } from 'react';
import './newsThree.styles.css';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MicroStrImg from '../../assests/images/MicroStrategy.jpeg';
import SecondImg from '../../assests/images/senond-part.jpg';

const NewsThree = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#f1f1f1", height: "100%" }}>
          <h1><i><b>Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 <span className='span-blue'>BTC</span></b></i></h1>
          <img className='img-newsOne' src={MicroStrImg} alt="img-paypal" />
          <div className='news-body'>
            <h2><b>Microstrategy Acquires More Bitcoin</b></h2>
            Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world’s largest cryptocurrency has emerged as ‘the institutional-grade digital asset,’ said Microstrategy founder Michael Saylor.
            Nasdaq-listed Microstrategy Inc. announced Wednesday that it has purchased more bitcoin for its corporate treasury. Michael Saylor, the company’s founder and executive chairman, tweeted Wednesday:
            Microstrategy has increased its bitcoin holdings by ~2,500 <span className='span-blue'>BTC</span>. As of 12/27/22 Microstrategy holds ~132,500 bitcoin acquired for ~$4.03 billion at an average price of ~$30,397 per bitcoin.
            The subsidiary bought approximately 2,395 <span className='span-blue'>BTC</span> at an average price of $17,871 per coin between Nov. 1 and Dec. 21. It then sold about 704 <span className='span-blue'>BTC</span> at $16,776 per coin on Dec. 22. Macrostrategy then bought about 810 more <span className='span-blue'>BTC</span> at $16,845 per coin on Dec. 24. At tIn its filing with the U.S. Securities and Exchange Commission (SEC), Microstrategy clarified that the 2,500 coins were acquired between Nov. 1 and Dec. 24 by its wholly owned subsidiary Macrostrategy.
            At the time of writing, bitcoin is trading at $16,656.80.
            The bitcoin sale in December marked the first time Microstrategy sold its bitcoin since it began accumulating the crypto for its corporate treasury in 2020. The company cited tax reasons for selling <span className='span-blue'>BTC</span>. ‘Microstrategy plans to carry back the capital losses resulting from this transaction against previous capital gains, to the extent such carrybacks are available under the federal income tax laws currently in effect, which may generate a tax benefit,’ the SEC filing describes.
            <img className='img-newsOne' src={SecondImg} alt="img-paypal" />
            Saylor said in an interview last week:
            The most positive thing of the year is the emergence of bitcoin as the institutional grade digital asset and the clarity that … There is one crypto asset that’s a digital commodity … Bitcoin is that commodity.
            The executive noted that both <span className='span-blue'>the chairman of the SEC and the chair of the Commodity Futures Trading Commission (CFTC)</span> have confirmed that bitcoin is a commodity.
            Saylor previously explained that Microstrategy is investing in <span className='span-blue'>BTC</span> ‘for the long term.’ He added: ‘Our strategy is to buy bitcoin and hold the bitcoin, so there’s no price target … I expect bitcoin is going to go into the millions. So, we’re very patient. We think it’s the future of money.’

          </div>
        </Box>
      </Container>
    </Fragment>
  )
}

export default NewsThree
