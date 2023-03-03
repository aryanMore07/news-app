import React, {Fragment} from 'react';
import './newsFive.styles.css';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MangoMarketImg from '../../assests/images/Mango-Markets-Exploiter-Arrested-In-Puerto-Rico.jpg';

const NewsFive = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#f1f1f1", height: "100%" }}>
          <h1><i><b>Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022</b></i></h1>
          <img className='img-newsOne' src={MangoMarketImg} alt="img-paypal" />
          <div className='news-body'>
            The investor drained $110 million in cryptocurrencies from the platform.Avraham Eisenberg, the crypto investor whose ‘highly profitable trading strategy’ drained DeFi trading platform Mango Markets of crypto worth $110 million, was arrested Monday in Puerto Rico, court documents said.
            The self-described game theorist admitted his role in draining Mango Markets’ treasury shortly after the incident in mid-October, and may now be the first U.S. resident to face charges for his role in manipulating a decentralized-finance trading platform.
            Eisenberg faces charges of commodities fraud and commodities manipulation, according to a filing unsealed Tuesday. The charges could see punishments ranging from fines to prison time.
            A deposition signed by FBI Special Agent Brandon Racz alleges Eisenberg ‘willfully and knowingly’ manipulated the sale of a commodity – namely futures contracts on Mango Markets.
            ‘Eisenberg engaged in a scheme involving the intentional and artificial manipulation of the price of perpetual futures contracts on a cryptocurrency exchange called Mango Markets, and other manipulative and deceptive devices and contrivances.’

          </div>

        </Box>
      </Container>
    </Fragment>
  )
}

export default NewsFive
