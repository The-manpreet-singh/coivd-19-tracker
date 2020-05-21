import axios from 'axios';

const url = 'https://covid19.mathdro.id/api' ;

export const fetchData = () => {

  try {
      const {data: { confirmed, recovered, deaths, lastUpdate } } = axios.get(url);
        return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
      return err;
  }

};