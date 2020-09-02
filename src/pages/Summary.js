import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import {useState} from 'react';

// import chart to toggle
import ChartGallery from './ChartGallery';
// Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function Summary() {
  const classes = useStyles();
  const [showCharts, setShowcharts] = useState(false);

  function toggleChart (e){
    if (showCharts) {
      setShowcharts(false);
    }
    else {
      setShowcharts(true);
    }
  }

  return (
    <div className={classes.root}>
        <Card >
              <CardContent>
                <Typography variant='h5' className={classes.title} color="textSecondary" gutterBottom>
                    {Math.trunc(Math.random()* 100)} 
                </Typography>
                <Typography variant='subtitle2'>
                    Customers
                </Typography>
              </CardContent>
        </Card>

        <Card >
              <CardContent>
                <Typography variant='h5' className={classes.title} color="textSecondary" gutterBottom>
                    {Math.trunc(Math.random()* 1000)} 
                </Typography>
                <Typography variant='subtitle2'>
                    Purchases
                </Typography>
              </CardContent>
        </Card>
        <Card >
              <CardContent>
                <Typography variant='h5' className={classes.title} color="textSecondary" gutterBottom>
                    {Math.trunc(Math.random()* 100)} % 
                </Typography>
                <Typography variant='subtitle2'>
                    Conversion
                </Typography>
              </CardContent>
        </Card>
        <Card >
              <CardContent>
                <Typography variant='h5' className={classes.title} color="textSecondary" gutterBottom>
                    {Math.trunc(Math.random()* 1000 / 2)} 
                </Typography>
                <Typography variant='subtitle2'>
                    Baggages
                </Typography>
              </CardContent>
        </Card>
        <Card >
              <CardContent>
                <Typography variant='h5' className={classes.title} color="textSecondary" gutterBottom>
                {Math.trunc(Math.random()* 1000 / 2)}
                </Typography>
                <Typography variant='subtitle2'>
                    RandNumber
                </Typography>
              </CardContent>
        </Card>
        <AddIcon onClick={toggleChart} color='disabled'/>
        
        <ChartGallery show={showCharts} />

    </div>
  );
}