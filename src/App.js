import React from 'react';

import classes from './App.module.css';
import image from './images/image.png';

const app = () => {
  return (
       <div className={classes.container}> 
            <img className={classes.image} src={image} alt='covid19' />
             
         </div>
     );
  }
export default app; 