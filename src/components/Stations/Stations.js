import React from 'react';
import stations from '../../info/stationInfo';
import './Stations.css';

const Stations = () => {
  return (
    <>
      <h3 className="tune">Stations to Tune Into...</h3>
      {stations.map(({ name, location, freq, dates }) => (
        <div key={name} className="station-card">
          <h5>{name}</h5>
          <p>
            ({location}) - {freq}
          </p>
          <p>Dates</p>
          {dates.map((date) => (
            <p key={date}>{date}</p>
          ))}
        </div>
      ))}
    </>
  );
};

export default Stations;
