import React from 'react';
// import ReactDOM from "react-dom";
import '../App.css'
import { TableCell, TableRow, Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Avatar from '@material-ui/core/Avatar';
import MUIDataTable from "mui-datatables";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
// import Fragment from 'react';
// import Dashboard from './Dashboard'

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

//import charting stuff 
// import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import { EventTracker } from '@devexpress/dx-react-chart';




const columns = [
 {
  name:  "Field Name\nClient/ Farm",
  label:  "Location Name",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name:  "Hybrid(s)\nPlanted",
  label: "Plants",
  options: {
   filter: true,
   sort: false,
   
  }
 },
 {
  name: "Acres\nArea Planted",
  label: "Area Planted",
  options: {
   filter: true,
   sort: true,
   customFilterListOptions: { render: v => `Acres: ${v}` }
  }
 },
 {
  name: "Planting \nDate",
  label: "Planting Date",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name:  "Average\nPopulation",
  label: "Average Population",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
 {
  name: "GDUs to date",
  label: "Sunshine units to date",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
 {
  name: "Season rain to date in inches",
  label: "Rainfall to date in inches",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
 {
  name: "Severe weather events",
  label: "Bad weather ",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
 {
  name: "Planters",
  label: "Machines",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
 {
  name: "Operators",
  label: "Operators",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },

 {
  name: "Seed brand",
  label: "product brand",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
 {
  name:  "Seed Treatment",
  label:  "product Treatment",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
 {
  name:"Total units (bags)",
  label: "Total units (bags)",
  options: {
   filter: true,
   sort: false,
   display: false,
  }
 },
];

const data = [
  {
      "Field Name\nClient/ Farm": "Garden in California",
      "Hybrid(s)\nPlanted": 4.0,
      "Acres\nArea Planted": 213.0,
      "Planting \nDate": "4/21\nstarted 4/20",
      "Average\nPopulation": 31000.0,
      "GDUs to date": 276.0,
      "Season rain to date in inches": "7\"",
      "Severe weather events": "",
      "Planters": 2.0,
      "Operators": 1.0,
      "Seed brand": "Kalbde, Neerpio",
      "Seed Treatment": "42-S blahhhham,",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "Zoo in Seattle",
      "Hybrid(s)\nPlanted": "KDC 51-58RIIB",
      "Acres\nArea Planted": 57.0,
      "Planting \nDate": "4/21\nstarted 4/20",
      "Average\nPopulation": 31000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "Yosemite playground 123",
      "Hybrid(s)\nPlanted": "KCD-34RB\n",
      "Acres\nArea Planted": 63.0,
      "Planting \nDate": "4/21\nstarted 4/20",
      "Average\nPopulation": 28000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "Chuchu town",
      "Hybrid(s)\nPlanted": "CKS-81RIB",
      "Acres\nArea Planted": 50.0,
      "Planting \nDate": "4/21\nstarted 4/20",
      "Average\nPopulation": 34000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "Titipo titipo",
      "Hybrid(s)\nPlanted": "Grass-32RIB",
      "Acres\nArea Planted": 43.0,
      "Planting \nDate": "4/21\nstarted 4/20",
      "Average\nPopulation": 29500.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "Nesqually park",
      "Hybrid(s)\nPlanted": "P05-74AMXT",
      "Acres\nArea Planted": 123.0,
      "Planting \nDate": "April 1 2018",
      "Average\nPopulation": 32000.0,
      "GDUs to date": 280.0,
      "Season rain to date in inches": 6.0,
      "Severe weather events": "",
      "Planters": 1.0,
      "Operators": 1.0,
      "Seed brand": "Kalbde, Neerpio",
      "Seed Treatment": "ABM127",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "Riverside park",
      "Hybrid(s)\nPlanted": 6.0,
      "Acres\nArea Planted": 245.0,
      "Planting \nDate": "April 1 2018",
      "Average\nPopulation": 28000.0,
      "GDUs to date": 295.0,
      "Season rain to date in inches": 9.0,
      "Severe weather events": "",
      "Planters": 1.0,
      "Operators": 1.0,
      "Seed brand": "Kalbde, Neerpio",
      "Seed Treatment": "Dnematicide",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "Jared Diamond park",
      "Hybrid(s)\nPlanted": "KDE 53-5IIB",
      "Acres\nArea Planted": 215.0,
      "Planting \nDate": "April 1 2018",
      "Average\nPopulation": 28500.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "Larry Page park",
      "Hybrid(s)\nPlanted": "KDE-64-34RIB\n",
      "Acres\nArea Planted": 10.0,
      "Planting \nDate": "April 10",
      "Average\nPopulation": 26000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "Richard Hamming theme park",
      "Hybrid(s)\nPlanted": "KDE55-84RIB",
      "Acres\nArea Planted": 4.0,
      "Planting \nDate": "April 15",
      "Average\nPopulation": 26000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "Von Neuman garden",
      "Hybrid(s)\nPlanted": "KDE 58-34RIB",
      "Acres\nArea Planted": 4.0,
      "Planting \nDate": "April 15",
      "Average\nPopulation": 26000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "Werner Herzog inferno",
      "Hybrid(s)\nPlanted": "P0574AXT",
      "Acres\nArea Planted": 4.0,
      "Planting \nDate": "April 25",
      "Average\nPopulation": 26000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "Twilio park",
      "Hybrid(s)\nPlanted": "P0589MXT",
      "Acres\nArea Planted": 4.0,
      "Planting \nDate": "April 28",
      "Average\nPopulation": 26000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  },
  {
      "Field Name\nClient/ Farm": "Auth0 park",
      "Hybrid(s)\nPlanted": "P136AMXT",
      "Acres\nArea Planted": 4.0,
      "Planting \nDate": "April 29",
      "Average\nPopulation": 26000.0,
      "GDUs to date": "",
      "Season rain to date in inches": "",
      "Severe weather events": "",
      "Planters": "",
      "Operators": "",
      "Seed brand": "",
      "Seed Treatment": "",
      "Total units (bags)": ""
  }
];


const chartdemodata = [
  { year: 'year 1', population: 2.525 },
  { year: 'year 2', population: 3.018 },
  { year: 'year 3', population: 3.682 },
  { year: 'year 4', population: 4.440 },
  { year: 'year 5', population: 5.310 },
  { year: 'year 6', population: 6.127 },
  { year: 'year 7', population: 6.930 },
];

const options = {
  // filterType: 'checkbox',
  expandableRows: true,
  selectableRowsHeader: false,
  
  renderExpandableRow: () => (
    <TableRow>
      
      <TableCell />
      <TableCell colSpan={5}>
        
      <Avatar variant="square" className='large'>
        FD
      </Avatar>

      <AvatarGroup max={5}>
        <Avatar alt="U" src="/static/images/avatar/1.jpg" />
        <Avatar alt="V" src="/static/images/avatar/2.jpg" />
        <Avatar alt="W" src="/static/images/avatar/3.jpg" />
        <Avatar alt="X" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Y" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>

      
          <DenseTable />
      </TableCell>
      <TableCell />
    </TableRow>
  )
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('product A', 159, 6.0, 24, 4.0),
  createData('product B', 237, 9.0, 37, 4.3),
  createData('Application C', 262, 16.0, 24, 6.0),
  createData('Equipment D', 305, 3.7, 67, 4.3),
  createData('Operator E', 356, 16.0, 49, 3.9),
];


const DenseTable=(props)=>{
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell align="right">Area</TableCell>
            <TableCell align="right">Harvest</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Rainfall</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {/* <TableCell align="right">{row.calories}</TableCell> */}
              <TableCell align="right"><ChartDemo /></TableCell>
              
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// this following html is prepared for the CKEditor 
var contentdata = "<h2>Title: Worms in southeast corner of field XYZ</h2><p>Tag: worm&nbsp;</p><p>Note <comment id=\"b39dd790\" type=\"start\"></comment>awesome<comment id=\"b39dd790\" type=\"end\"></comment>1234, abc</p><p>Image:</p><figure class=\"image\"><img src=\"https://s3-us-west-2.amazonaws.com/climate-com/images/products/edit-prescription.png\"></figure>"


class ChartDemo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      chartdemodata,
    };
  }

  render() {
    const { chartdemodata: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
          rotated
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          <Title text="Output by years" />
          <Animation />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
    );
  }
}



export default function Report ({reporttype, cropseason, groupby}) {
    const t = reporttype + " / " + cropseason + " / " + groupby ;
    return (
      <>
        <div style={{ maxWidth: "100%" }}>
        
        
              <MUIDataTable
                  title={'Table: ' + t + ' (Random number:' + Math.random() + ')'}
                  data={data}
                  columns={columns}
                  options={options}
              />
        
        </div>
        {/* the following section is boilerplate code for rich text editor */}
        {/* removing the CKEditor  */}
        {/* <h1>Scouting Report with pre-populated notes</h1>
        <CKEditor
        editor={ ClassicEditor }
        data = {contentdata}
        onInit={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
            const data = editor.getData();
            console.log( { event, editor, data } );
        } }
        onBlur={ ( event, editor ) => {
            console.log( 'Blur.', editor );
        } }
        onFocus={ ( event, editor ) => {
            console.log( 'Focus.', editor );
        } }
        /> */}
      </>
      

    );
  
}

// export default withStyles(styles)(Report);