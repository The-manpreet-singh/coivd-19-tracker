import React from 'react';

import { Cards, CountryPicker } from './components';
import { fetchData } from './Api/';
import styles from './App.module.css';

import image from './assets/image.png';
import countryPicker from './components/CountryPicker/CountryPicker';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
   // console.log(data);
  }

  countryChangeHandler = async (country) => {
   const data = await fetchData(country) ;
   this.setState({ data, country: country});
   console.log(data);
  }
 
  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker onclicked={this.countryChangeHandler} />
      </div>
    );
  }
}

export default App;