import React from 'react';
import './Home.scss';
import Snowfall from 'react-snowfall';
import logo from '../../assets/images/TropRockLogo.png';
import sponsors from '../../info/sponsorInfo';

import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div id="home">
      <Snowfall
        color="white"
        snowflakeCount={200}
        style={{ height: '60vh', position:'fixed' }}
        images={logo}
      />
      <div className='background'>

          <h2 className="head-text">A Trop Rockin' Christmas...</h2>
          {/* <img src={logo} alt="" id="home-logo" /> */}
          <div>
            <p className="info-text">
              From the California Coast to the Florida Keys and beyond... 
              <br/>
              It's a Trop Rockin' Christmas, exclusively on Radio Trop Rock! 
            </p>

            <h3> Merry Christmas everyone! </h3> 

            <p className='info-text'>
              Buckle in and join John Patti Sr. for a two-hour trip to beaches, tiki bars,
              and holiday parties. There will be plenty of Trop Rock tunes along the
              way from some of your favorite artists like current Coral Reefers
              Peter Mayor, Doyle Grisham, Nadirah Shakor and original Coral Reefer
              Roger Bartlett. 
            </p>

            <p className='info-text'> 
              We will even go south of border with Brent Burns and mix up a
              batch of gumbo with The Sauce Boss.
            </p>

            <p className='info-text'>
              Some of the other Trop Rock artists featured this year include: <br/> Brendan
              Mayer, Tall Paul Bobal, Sunny Jim White, John Patti, Jimmy & The
              Parrots, Kelly McGuire, Isabella Stefania, Gary James Moeller, Mike
              Broward, as well as Kenny Chesney, and of course Jimmy Buffett.
            </p>

            <p className='info-text'>
              We will also take you across the country at Christmas to visit with
              some of the people who make it possible for us to enjoy Trop Rock
              music like Dr. Joe Thornhill in Chicago, The Lake Shark Parrott Head
              Club in Florida, and Bill Connolly. He will take us behind the scenes
              at the annual “Music On The Bay” in Tampa.
            </p>

            <p className='info-text'>
              Plus... Parrothead Christmas confessions!
            </p>

            <p className='info-text'>
              Grab your boat drink, slip into your flip flops, and don't forget your passport. 
            </p>

            <p className='info-text'>
              Check airing times exclusively at <a href='https://radiotroprock.com/'>radiotroprock.com</a>
            </p>
          </div>
            
        
        <h3>A very special thank you to our sponsors...</h3>
        <div className="sponsor-links">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.website}
              target="_blank"
              rel="noreferrer"
            >
              {sponsor.name}
            </a>
          ))}
        </div>
        <Footer sticky="bottom" />
      </div>
    </div>
  );
};

export default Home;
