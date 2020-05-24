import React, { useState, useEffect } from 'react';
import classes from './Chart.module.css';
import { fetchDailyData } from '../../Api';
import { Bar, Line } from 'react-chartjs-2';

const Chart = (props) => {
    
    const [dailyData, setDailyData ] = useState({});
    
    //console.log(dailyData[dailyData.length-1]);

    useEffect( ()=> {
     
    const fetchApi = async () => {
        const initialDailyData= await fetchDailyData();
        setDailyData( initialDailyData );
    }
    fetchApi();

    },[] );
    
     const lineChart = (
        dailyData[0] ? (
            <Line 
               data= {{
                   labels: dailyData.map( (dates) => dates.date ) ,
                   datasets: [ {
                           data: dailyData.map( (datas)=> datas.confirmed ),
                           label: 'Infected',
                           borderColor: '#3333ff',
                           fill: true
                           }, {
                            data: dailyData.map( (datas)=> datas.deaths ),
                            label: 'Deaths',
                            borderColor: 'rgba(255,0,0, 0.5',
                           fill: true
                         }, ]
               }}
            
            />
        ) :
         null
    );

 
    const barChart= (
        props.data.confirmed ? (
            <Bar 
              data= {{
                  labels: ['Infected', 'Recovered', 'Deaths'],
                  datasets: [
                      {
                       label: 'People',
                       backgroundColor: ['rgba(0,0,255, 0.5)',
                                          'rgba(0,255,0,0.5)',
                                        'rgba(255,0,0,0.5' ],
                       data: [ props.data.confirmed.value,
                               props.data.recovered.value,
                               props.data.deaths.value  ]
                      }
                  ]
              }}
              options= {{
                legend: { display: false },
                title: { display:true, text: `Current state in ${props.country}` }
              }}
              />
        ) : null
    );
    return (
        <div className={classes.container}>
         { props.country ? barChart : lineChart }
        </div>
    );
}

export default Chart;