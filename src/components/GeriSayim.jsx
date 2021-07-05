import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  counter: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    border: '1px solid',
    backgroundColor: 'black',
    color: 'white',
    marginLeft: '20rem',
    borderRadius: '20px',
  },
  box: {
    margin: '10px',
  },
}));

const GeriSayim = () => {
  const classes = useStyles();

  const [date, setDate] = useState(() => {
    const localDate = localStorage.getItem('date');
    return localDate
      ? moment(JSON.parse(localDate))
      : moment().add(10, 'hours');
  });

  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSecounds] = useState('00');

  let interval = useRef();

  useEffect(() => {
    geriSayimiBaslat();
    return clearInterval(interval.current);
  }, [date]);

  const geriSayimiBaslat = () => {
    interval = setInterval(() => {
      localStorage.setItem('date', JSON.stringify(date));
      const now = moment();
      const distance = date - now;
      const hours = moment.duration(distance).hours();
      const minutes = moment.duration(distance).minutes();
      const seconds = moment.duration(distance).seconds();

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setHours(hours);
        setMinutes(minutes);
        setSecounds(seconds);
      }
    }, 1000);
  };

  return (
    <div className={classes.counter}>
      <div className={classes.box}>
        <p>{hours}</p>
        <p>
          <small>Saat</small>
        </p>
      </div>
      <div className={classes.box}>
        <p>{minutes}</p>
        <p>
          <small>Dakika</small>
        </p>
      </div>
      <div className={classes.box}>
        <p>{seconds}</p>
        <p>
          <small>Saniye</small>
        </p>
      </div>
    </div>
  );
};
export default GeriSayim;
