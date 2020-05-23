import React, { useState, useEffect } from 'react';

import { Cards, CountryPicker } from './components';
import { fetchData } from './Api/';
import styles from './App.module.css';

import image from './assets/image.png';


const App =()=> {
   const [data, setData]= useState({});

   
  useEffect( () => {
    const data= async () => {
      setData( await fetchData());
    }
    data();
      
  },[]);

 const countryChangeHandler = async (country) => {
   const data = await fetchData(country) ;
   return setData(data);
  }


    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker onClicked={countryChangeHandler} />
      </div>
    );
  }


export default App;