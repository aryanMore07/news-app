import React, {Fragment} from 'react';
import './newsFour.styles.css';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BitMiners from '../../assests/images/minerBitcoin.jpg';

const NewsFour = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#f1f1f1", height: "100%" }}>
          <h1><i><b> Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022</b></i></h1>
          <img className='img-newsOne' src={BitMiners} alt="img-paypal" />
          <div className='news-body'>
            2022 has been a rough and tough year for investors, traders, cryptocurrency businesses, and miners in general. The prolonged bear market, exacerbated by a series of catastrophic events, posed a threat to miners.
            Miners were dealing with a variety of issues, including defaulted loans, quarterly losses, and soaring bitcoin hash rates that reached all-time highs. All these factors were affecting the profitability of the miners and were causing sell pressure.
            The situation was aggravated when cryptocurrency prices, including Bitcoin’s, plummeted. Bitcoin, which was hovering around $48,000 last year, hit a low of $15,590 by the end of 2022. According to the data collected from The Block, bitcoin miners’ revenue hit $9.55 billion in 2022.
            Bitcoin miners’ revenue dropped in 2022
            <h3 style={{textAlign: 'left'}}><i><b> Bitcoin miners’ revenue dropped in 2022</b></i></h3>
            Bitcoin, which is trading at $16,721 at press time, has been on a downward spiral alongside other cryptocurrencies. The falling cryptocurrency prices had a major effect on the income and profits of miners. Even though the $9.55 billion in revenue in 2022 seems like a large number, it is comparatively lower than that of 2021.
            Over the course of 2021, bitcoin miners made more than $15 billion in revenue, according to the data from the block. This was actually considered to be a 206% year-over-year increase.

          </div>

        </Box>
      </Container>
    </Fragment>
  )
}

export default NewsFour
