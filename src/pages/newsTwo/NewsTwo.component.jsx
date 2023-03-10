import React, { Fragment } from 'react';
import './newsTwo.styles.css';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ItalianCryImg from '../../assests/images/italy-cryptocurrency-tax.jpeg';

const NewsTwo = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#f1f1f1", height: "100%" }}>
          <h1><i><b>Prime Minister Giorgia Meloni's new bill also includes an incentive for those declaring crypto for tax purposes.</b></i></h1>
          <img className='img-newsTwo' src={ItalianCryImg} alt="img-paypal" />
          <div className='news-body'>
            Crypto traders in Italy will be subject to a <span className='span-green'>26% capital-gains</span> tax starting in 2023, according to a new budget that won parliamentary approval on Thursday.
            Italian Prime Minister Giorgia Meloni's 2023 expansionary budget – which was completed in a rush before the end of the year – features 21 billion euros <span className='span-green'>($22.3 billion)</span> in tax breaks to assist businesses and households facing the energy crisis, Reuters reported.
            Italy's (and most recently <span className='span-green'>Portugal's</span>) move to introduce a capital-gains tax on crypto comes ahead of the implementation of the European Union's <span className='span-green'>Markets in Crypto Assets (MiCA)</span>regulation that promises a licensing frameworks and stringent operating requirements for crypto-service providersin the 27-member bloc.
            The 26% rate applies to gains from crypto trading if they exceed 2,000 euros per tax period. As an incentive for declaring crypto profits, the new bill also sets a "<spam className='span-green'>substitute income tax</spam>" for investors at 14% of the value of the assets held as of Jan. 1, 2023, instead of the cost at the time of purchase.
            According to the new rules, losses from crypto investments can be deducted from profits and be carried forward.
            Investors, however, may require some additional guidance on what qualifies as a taxable event as the document also says, "the exchange between crypto assets having same characteristics and functions," doesn't constitute a "fiscal case."

          </div>

        </Box>
      </Container>
    </Fragment>
  )
}

export default NewsTwo
