import React from 'react';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';

import './AboutCard.scss'

const AboutCard = ({ person }) => {
  const { title, bio, pic, link } = person;
  console.log(link);
  return (
    <>
      <div className='hosts'>
        <img src={pic} alt={person.title}/>
        <h3 className='bold-text'><a href={`mailto:${link}`} target="_blank" rel="noreferrer">{title}</a></h3>
        <p className='info-text'>{bio}</p>
      </div>
    </>
  );
};

export default AboutCard;
