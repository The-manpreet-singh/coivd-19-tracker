import axios from 'axios';

const url = 'https://covid19.mathdro.id/api' ;

export const fetchData = async () => {
  let changeableUrl = url;

  try {
      const {data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
      return err;
  }

};