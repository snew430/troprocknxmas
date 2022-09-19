import React from 'react';
import './Home.scss';
import Snowfall from 'react-snowfall';
//import Snowflakes from 'magic-snowflakes';
import logo from '../../assets/images/TropRockLogo.png';
import sponsors from '../../info/sponsorInfo';
import musicians from '../../info/musicianInfo';

import Footer from '../Footer/Footer';
import Lights from '../Lights/Lights';

const Home = () => {
  return (
    <div id="home">

      {/* //snowflakes.start(); */}
      <div className='background'>
        <Lights />
        <div className="app__flex">
          <img src={logo} alt="trop rock christmas logo" className="logo"></img>
        </div>

        {/* <h2 className="head-text">It's Trop Rockin' this Christmas</h2> */}
        {/* <img src={logo} alt="" id="home-logo" /> */}
        <div>
          <p className="info-text">
            From the California Coast to the Florida Keys and beyond...
            <br />
            It's a Trop Rockin' Christmas, exclusively on Radio Trop Rock!
          </p>

          <h3> Merry Christmas everyone! </h3>

          <p className="info-text red-card">
            Buckle in and join John Patti Sr. for a two-hour trip to beaches,
            tiki bars, and holiday parties. There will be plenty of Trop Rock
            tunes along the way from some of your favorite artists like current
            Coral Reefers Peter Mayer, Doyle Grisham, Nadirah Shakor and
            original Coral Reefer Roger Bartlett.
          </p>

          <h3 className="funky">
            We will even go south of border with Brent Burns and mix up a batch
            of gumbo with The Sauce Boss.
          </h3>

          <h3>
            Some of the other Trop Rock artists featured this year include:
          </h3>

            <div className='app__flex musicians-list'>
              {musicians.map(musician => (
                <li>{musician}</li>
              ))}
            </div>

          <p className="info-text green-card">
            We also take you across the country at Christmas to visit with some
            of the people who make it possible for us to enjoy Trop Rock music
            like Dr. Joe Thornhill in Chicago, The Lake Shark Parrott Head Club
            in Florida, and Bill Connolly. He will take us behind the scenes at
            the annual “Music On The Bay” in Tampa.
          </p>

          <h3 className="funky">Plus... Parrothead Christmas confessions!</h3>

          <p className="info-text">
            Grab your boat drink, slip into your flip flops, and don't forget
            your passport.
          </p>

          <p className="info-text">
            Check airing times exclusively at{' '}
            <a href="https://radiotroprock.com/">radiotroprock.com</a>
          </p>
        </div>

        <h3>A very special thank you to our sponsors</h3>
        <div className="sponsor-links">
          {sponsors.map((sponsor) =>
            sponsor.logo ? (
              <a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noreferrer"
                className="sponsor-link"
                style={{
                  backgroundImage: `url(${sponsor.logo})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
                {' '}
              </a>
            ) : (
              <a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                className="sponsor-link"
                rel="noreferrer"
              >
                {sponsor.name}
              </a>
            )
          )}
        </div>
        <Footer sticky="bottom" />
      </div>
    </div>
  );
};

export default Home;
