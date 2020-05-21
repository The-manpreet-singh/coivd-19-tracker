import React, { Component } from 'react';

import classes from './App.module.css';
import image from './assets/image.png';
import Cards from './components/Cards/Cards';
import {fetchData} from './Api/index';

class App extends Component {
    state = {
         data : {}
    }
   
   async componentDidMount () {
         const data = await fetchData();
         this.setState({data});
         console.log(data);
    }

     render () {

        return (
       <div className={classes.container}> 
             <img className={classes.image} src={image} alt='covid19' />
              <Cards data={this.data} /> 
         </div>
     );
};
};
export default App;