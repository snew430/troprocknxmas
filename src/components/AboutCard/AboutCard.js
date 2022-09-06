import React from 'react';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';

const AboutCard = ({ person }) => {
  const { title, bio, pic, link } = person;
  console.log(link);
  return (
    <>
      <div className='app__flex'>
        <img src={pic} alt={person.title}/>
            <h2 className='bold-text'><a href={`mailto:${link}`} target="_blank" rel="noreferrer">{title}</a></h2>
            <p className='p-text'>{bio}</p>
      </div>
    </>
  );
};

export default AboutCard;
