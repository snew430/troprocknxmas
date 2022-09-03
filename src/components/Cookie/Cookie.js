import React from 'react';
import cookie from '../../assets/images/cookie.jpeg';
import baking from '../../assets/images/baking.jpeg';
import './Cookie.css';

const Cookie = () => {
  return (
    <>
      <h2 id="cookieHeader">Cookie</h2>
      <p>The cookies will be sold in quantities of 1 pound.</p>
      <img className="cookiePic" src={cookie} alt="cookie" />
      <p>
        All of the proceeds will go to “Remember Our Children”. Their mission is
        to help parents who have lost children to tragedy. Here is a link to
        their web site. You can link it to ours.
      </p>
      <img className="cookiePic" src={baking} alt="joe baking cookies" />
      <a href="http://www.rocpark.com/" rel="noreferrer" target="_blank">
        R.O.C. Park
      </a>
    </>
  );
};

export default Cookie;
