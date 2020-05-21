import React from 'react';
import classes from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';

const cards = (props) => {
    return (
 <div className={classes.container}>
          
    <Grid container spacing={3} justify="center">

      <Grid item xs={12} md={3} component={Card} className={ cx(classes.card, classes.infected) } >
        <CardContent>
        <Typography  color="textSecondary" gutterBottom>
            Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          belent
        </Typography>
        <Typography  color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
        </Typography>
         </CardContent>
      </Grid>
    
    
      <Grid item xs={12} md={3} component={Card}  className={ cx(classes.card, classes.recovered) } >
      <CardContent>
           <Typography  color="textSecondary" gutterBottom>
          Word of the Day
          </Typography>
        <Typography variant="h5" component="h2">
          belent
        </Typography>
        <Typography  color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
        </Typography>
         </CardContent>
      </Grid>

      <Grid item xs={12} md={3} component={Card}  className={ cx(classes.card, classes.deaths) } >
      <CardContent>
           <Typography  color="textSecondary" gutterBottom>
          Word of the Day
          </Typography>
        <Typography variant="h5" component="h2">
          belent
        </Typography>
        <Typography  color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
        </Typography>
         </CardContent>
      </Grid>


    </Grid>    


</div>

    );
}

export default cards;