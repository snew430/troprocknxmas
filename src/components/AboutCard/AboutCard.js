import React from 'react';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';

import './AboutCard.scss'

const AboutCard = ({ person }) => {
  const { title, bio, pic, link } = person;
  console.log(link);
  return (
      <div className='app__about'>
        <div className="app__profiles">
          <div className='app__profile'>
            <img src={pic} alt={person.title}/>
            <h2 className='bold-text'><a href={`mailto:${link}`} target="_blank" rel="noreferrer">{title}</a></h2>
            <p className='p-text'>{bio}</p>
          </div>
        </div>
      </div>

  );
};

export default AboutCard;
