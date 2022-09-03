import './About.css';
import AboutCard from '../AboutCard/AboutCard';
import info from '../../info/aboutInfo';
import CardGroup from 'react-bootstrap/CardGroup';
import studio from '../../assets/images/studio.jpg';

const About = () => {
  return (
    <>
      <div className="aboutUs">
        {/* <CardGroup> */}
        {info.map((person) => (
          <AboutCard key={person.title} person={person} />
        ))}
        {/* </CardGroup> */}
      </div>
      <div className="aboutTrop">
        <h2>Who we are</h2>
        <img id="studioPic" src={studio} alt="" />
      </div>
    </>
  );
};

export default About;
