import React from 'react';
import Card from 'react-bootstrap/Card';

const AboutCard = ({ person }) => {
  const { title, bio, pic, link } = person;

  return (
    <>
      <Card className="card biography" style={{ width: '18rem' }}>
        <Card.Img className="card-image" variant="top" src={pic} />
        <Card.Body>
          <Card.Title>
            <a href={link} target="_blank" rel="noreferrer">
              {title}
            </a>
          </Card.Title>
          <Card.Text>{bio}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default AboutCard;
