import React from 'react';
import classes from './CountryPicker.module.css';
import {  NativeSelect , FormControl } from '@material-ui/core';

const countryPicker = () => {

    return (
        <FormControl className={classes.formControl} >
          <NativeSelect defaultValue="" >
              <option value="">Global</option>
          </NativeSelect>
      </FormControl>
    );
}
export default countryPicker;