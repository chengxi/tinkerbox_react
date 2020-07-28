import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
//imports for selection
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//import for breadcrumb
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

//import report 
import Report from './Report';
//import summary
import Summary from './Summary';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const Dummytable = ({reporttype, cropseason, groupby}) => {
    
    const num = Math.random();
    return (
        <div>
            {/* <h1>{reporttype} / season: {cropseason} / by {groupby} / {num}</h1> */}
            <Dummysubtable reporttype={reporttype} cropseason={cropseason} groupby={groupby} num={num}/>
        </div>
    );
}

const Dummysubtable = ({reporttype, cropseason, groupby, num}) => {
    
    function myName (){
        return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    }
    return (
        <div>
            <h1>{reporttype} / season: {cropseason} / by {groupby} / {myName()}</h1>
            {/* <h2>{id}</h2> */}
        </div>
    );
}


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function Reportv2 () {
    const classes = useStyles();
    // const [age, setAge] = React.useState('');
    const [reporttype, setReporttype] = React.useState('planting');
    const [cropseason, setCropseason] = React.useState('2019-corn');
    const [groupby, setGroupby] = React.useState('customer');
    
    // const handleChange = (event) => {
    //     setAge(event.target.value);
    //   };

    const handleReporttypeChange = (event) => {
      setReporttype(event.target.value);
    };
    const handleReportSeason = (event) => {
        setCropseason(event.target.value);
      };
    const handleReportGroupby = (event) => {
        setGroupby(event.target.value);
    }

    return (
     <>
     
     <div>
     <Breadcrumbs aria-label="breadcrumb">
     <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Metrics type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={reporttype}
          onChange={handleReporttypeChange}
        >
          <MenuItem value={'planting'}>Revenue</MenuItem>
          <MenuItem value={'application'}>Cost</MenuItem>
          <MenuItem value={'yield'}>Retention</MenuItem>
        </Select>
      </FormControl>
        
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cropseason}
          onChange={handleReportSeason}
        >
          <MenuItem value={'2019-corn'}>Books</MenuItem>
          <MenuItem value={'2018-soybean'}>Clothing</MenuItem>
          <MenuItem value={'2017-canabis'}>Games</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Group by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={groupby}
          onChange={handleReportGroupby}
        >
          <MenuItem value={'hybrid'}>Color</MenuItem>
          <MenuItem value={'field'}>Weight</MenuItem>
          <MenuItem value={'customer'}>Price</MenuItem>
        </Select>
      </FormControl>
      {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
    </Breadcrumbs>
    
    <Summary gutterBottom/>
    <Dummytable reporttype={reporttype} cropseason={cropseason} groupby={groupby}/>
    {/* <Dummyblock reporttype={reporttype} cropseason={cropseason} groupby={groupby}/> */}
    <Report reporttype={reporttype} cropseason={cropseason} groupby={groupby}/>
    
     </div>
     </>

    );
  
}
