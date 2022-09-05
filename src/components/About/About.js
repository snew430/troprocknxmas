import './About.scss';
import AboutCard from '../AboutCard/AboutCard';
import info from '../../info/aboutInfo';
import CardGroup from 'react-bootstrap/CardGroup';
import studio from '../../assets/images/studio.jpg';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <div id="about">
      <div id="aboutTrop">
        <h2>
          From the Keys to California....It's{' '}
          <span className="emphasize2">A Trop Rockin' Christmas!</span>
        </h2>
        <img id="studioPic" src={studio} alt="" />
        <p>
          A two-hour coast to coast radio broadcast all about beaches, tiki
          bars, boat drinks, flip flops, family, and friends exclusively on the
          multi-award-winning Radio Trop Rock. Radiotroprock.com is Santa's
          Internet home for the holidays!
        </p>
        <p>
          We blend the sounds of the season from your favorite Trop Rock artists
          with Christmas memories, fascinating stories, and holiday greetings.
        </p>
        <p>
          John Patti Sr. has traveled to various parts of the U.S. to track down
          never-before-told tales from your favorite Trop Rock artists and their
          fans.
        </p>
        <p>
          “A Trop Rockin' Christmas” is in its third year of production and has
          been nominated for “Best Recorded Radio Show” for the 2022 Trop Rock
          Music Association (TRMA) awards.
        </p>
      </div>
      <div className="aboutUs">
        {info.map((person) => (
          <AboutCard key={person.title} person={person} />
        ))}
      </div>
      <Footer sticky="bottom" />
    </div>
  );
};

export default About;
