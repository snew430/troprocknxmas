import React from 'react';
import './Home.css';
import Snowfall from 'react-snowfall';
import logo from '../../assets/images/TropRockLogo.png';

const Home = () => {
  return (
    <div className="home-body">
      <div className="home-banner">
        <Snowfall
          color="lightblue"
          snowflakeCount={200}
          style={{ height: '40vh' }}
          images={logo}
        />
        <h2 className="home-header">A Trop Rockin' Christmas...</h2>
        {/* <img src={logo} alt="" id="home-logo" /> */}
      </div>

      <section className="p-text">
        <p>
          From the California Coast to the Florida Keys and beyond ....It's{' '}
          <span className="emphasize">A Trop Rockin' Christmas</span>,
          exclusively on Radio Trop Rock! Merry Christmas everyone! Buckle in
          and join John Patti, Sr. for a two-hour trip to beaches, tiki bars,
          and holiday parties. There will be plenty of Trop Rock tunes along the
          way from some of your favorite artists like current Coral Reefers
          Peter Mayor, Doyle Grisham, Nadirah Shakor and original Coral Reefer
          Roger Bartlett.
        </p>
        <p>
          We will also go south of border with Brent Burns and even mix up a
          batch of gumbo with The Sauce Boss.
        </p>
        <p>
          Some of the other Trop Rock artists featured this year include Brendan
          Mayer, Tall Paul Bobal, Sunny Jim White, John Patti, Jimmy & The
          Parrots, Kelly McGuire, Isabella Stefania, Gary James Moeller, Mike
          Broward, as well as Kenny Chesney, and of course Jimmy Buffett.
        </p>
        <p>
          We will also take you across the country at Christmas to visit with
          some of the people who make it possible for us to enjoy Trop Rock
          music like Dr. Joe Thornhill in Chicago, The Lake Shark Parrott Head
          Club in Florida, and Bill Connolly. He will take us behind the scenes
          at the annual “Music On The Bay” in Tampa.
        </p>
        <p>Plus....Parrothead Christmas confessions!</p>
        <p>
          Grab your boat drink, slip into your flip flops and don't forget your
          passport. Check airing times exclusively at radiotroprock.com.
        </p>
      </section>
    </div>
  );
};

export default Home;
