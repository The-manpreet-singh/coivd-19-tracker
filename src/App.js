import React from 'react';

import classes from './App.module.css';
import image from './assets/image.png';
import Cards from './components/Cards/Cards';

const app = () => {
  return (
       <div className={classes.container}> 
             <img className={classes.image} src={image} alt='covid19' />
             {/* <Cards /> */}
         </div>
     );
};
export default app;