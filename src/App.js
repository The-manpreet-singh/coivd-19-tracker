import React, { useState, useEffect } from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './Api/';
import styles from './App.module.css';

import image from './assets/image.png';


const App =()=> {
   const [data, setData]= useState({});
   const [country, setCountry] = useState('');

   
  useEffect( () => {
    const data= async () => {
      const dataInitial= await fetchData();
      setData( dataInitial );
    }
    data();
      
  },[]);

 const countryChangeHandler = async (country) => {
   const data = await fetchData(country) ;
   return (
         setData(data),
         setCountry(country)
   )
  }


    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker onClicked={countryChangeHandler} />
        <Chart data={data} country={country} />
      </div>
    );
  }


export default App;