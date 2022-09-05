import React from 'react';
import cookie from '../../assets/images/cookie.jpeg';
import baking from '../../assets/images/baking.jpeg';
import './Cookie.scss';
import Footer from '../Footer/Footer';


const Cookie = () => {
  return (
    <div id="cookie">
      <h2 className='head-text'>Ahhhh.... The Cookies</h2>
      <p className='info-text'>You can support our fundraiser by buying cookies!</p>
      <img src={cookie} alt="cookie" />
      <p className='info-text'>
        The cookies are sold in quantities of{' '}
        <span className="emphasize">1 pound.</span>
      </p>
      <p>
        All of the proceeds will go to{' '}
        <span className="emphasize">“Remember Our Children”</span>. 
        <br />
        Their mission is to help parents who have lost children to tragedy. Here is a
        link to their web site.
      </p>
      <a href="http://www.rocpark.com/" rel="noreferrer" target="_blank">
        <span className="emphasize">R.O.C. Park</span>
      </a>
      <img src={baking} alt="joe baking cookies"/>

      <p className='info-text'>More information to come on how you can support this fundraiser!</p>
      <Footer sticky="bottom" />
    </div>
  );
};

export default Cookie;
