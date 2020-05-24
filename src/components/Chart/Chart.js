import React, { useState, useEffect } from 'react';
import classes from './Chart.module.css';
import { fetchDailyData } from '../../Api';
import { Bar } from 'react-chartjs-2';

const Chart = (props) => {
    
    const [dailyData, setDailyData ] = useState({});

    useEffect( ()=> {
     
    const fetchApi = async () => {
        const initialDailyData= await fetchDailyData();
        setDailyData( initialDailyData );
    }
    fetchApi();

    },[] );

    const barChart= (
        props.confirmed ? (
            <Bar 
              data= {{
                  labels: ['Infected', 'Recovered', 'Deaths'],
                  datasets: [
                      {
                       label: 'People',
                       backgroundColor: ['red'],
                       data: [ props.confirmed.value,
                               props.recovered.value,
                               props.deaths.value  ]
                      }
                  ]
              }}
              options= {{
                legend: { display: false },
                title: { display:true, text: `Corrent state in ${props.country}` }
              }}
              />
        ) : null
    );

    return (
        <div className={classes.container}>
         { props.country ? barChart : null }
        </div>
    );
}

export default Chart;