import React from 'react';
import cookie from '../../assets/images/cookie.jpeg';
import baking from '../../assets/images/baking.jpeg';
import './Cookie.scss';
import Footer from '../Footer/Footer';


const Cookie = () => {
  return (
    <div id="cookie">
      <h2>Ahhhh.... The Cookies</h2>
      <p>
        The cookies will be sold in quantities of{' '}
        <span className="emphasize">1 pound.</span>
      </p>
      <img className="cookiePic" src={cookie} alt="cookie" />
      <p>
        All of the proceeds will go to{' '}
        <span className="emphasize">“Remember Our Children”</span>. Their
        mission is to help parents who have lost children to tragedy. Here is a
        link to their web site.
      </p>
      <a href="http://www.rocpark.com/" rel="noreferrer" target="_blank">
        <span className="emphasize">R.O.C. Park</span>
      </a>
      <img className="cookiePic" src={baking} alt="joe baking cookies" />

      <p>More info to come on how you can support us!</p>
      <Footer sticky="bottom" />
    </div>
  );
};

export default Cookie;
