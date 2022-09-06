import React from 'react';
import cookie from '../../assets/images/cookie.jpeg';
import baking from '../../assets/images/baking.jpeg';
import './Cookie.scss';
import Footer from '../Footer/Footer';


const Cookie = () => {
  return (
    <div id="cookie">
      <div className='background'>
        <h2 className='head-text'>Ahhhh.... The Cookies</h2>
        <p className='info-text'>You can support our fundraiser by buying cookies!</p>
        <img src={cookie} alt="cookie" />
        <img src={baking} alt="joe baking cookies"/>
        <p className='info-text'>
          Cookies are sold by the pound, and all of the proceeds go to the organization:
          <br/>
        
          “Remember Our Children.”
          <br />
          Their mission is to help parents who have lost children to tragedy.
          <br/>
          <a href="http://www.rocpark.com/" rel="noreferrer" target="_blank">Click Here to Visit the R.O.C. Website</a>
          < br/>
          More information to come on how you can support this fundraiser!
        </p>
        <Footer sticky="bottom" />
      </div>
    </div>
  );
};

export default Cookie;
