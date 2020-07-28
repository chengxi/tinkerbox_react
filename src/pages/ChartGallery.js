import * as React from 'react';
import { AreaChart, Area, XAxis, YAxis, LabelList, Tooltip, ComposedChart, Brush } from 'recharts';
import { BarChart, Bar, Label, CartesianGrid } from 'recharts';
import { PieChart, Pie, Line, ReferenceLine, Legend, CartesianAxis} from 'recharts';
import {Container} from '@material-ui/core';

// yield distribution data for area chart ()
const yield_distribution = [

              {"yieldrange": '0-50',    "farmcount":0}, 
              {"yieldrange": '51-100',  "farmcount":0},
              {"yieldrange": '101-150', "farmcount":11},
              {"yieldrange": '151-200', "farmcount":5},
              {"yieldrange": '200-250', "farmcount":4},
              {"yieldrange": '251-300', "farmcount":8},
              {"yieldrange": '301-350', "farmcount":0},
              {"yieldrange": '351-400', "farmcount":0}
];

// progress data 
const progress_data = [
  {"name": "planted", "done": 1200, "remaining": 8800, "percent_done": "12% done", "percent_remaining": "88% remaining"},
  // {"name": "planted", "done": 1200, "remaining": 8800}
];

// pie progress data
const progress_pie_data = [
  {"name": "done", value: 1200},
  {"name": "remaining", value: 8800}
  // {"name": "planted", "done": 1200, "remaining": 8800}
];

const multicrop_multiregion_progress = [
  {"name": "region-1", "popcorn": 123, "sunscreen": 213, "shoes": 12, "soymilk": 200, "flour": 41, "progress":[510, 800], "total_planted": 510, "total_remaining": 300},
  {"name": "region-2", "popcorn": 123, "sunscreen": 213, "shoes": 12, "soymilk": 200, "flour": 41, "progress":[200, 500], "total_planted": 200, "total_remaining": 200},
  {"name": "region-3", "popcorn": 123, "sunscreen": 213, "shoes": 12, "soymilk": 200, "flour": 41, "progress":[212, 300], "total_planted": 300, "total_remaining": 100},
  {"name": "region-4", "popcorn": 123, "sunscreen": 213, "shoes": 12, "soymilk": 200, "flour": 41, "progress":[112, 300], "total_planted": 100, "total_remaining": 100},
  {"name": "region-5", "popcorn": 123, "sunscreen": 213, "shoes": 12, "soymilk": 200, "flour": 41, "progress":[312, 320], "total_planted": 100, "total_remaining": 100},
];

const harvest_equipment_daily_progress = [
  {"date": "2000-01-01", "equipment": 30, "harvest": 123, 'day':0, 'low':1},
  {"date": "2000-01-02", "equipment": 10, "harvest": 143, 'day':0, 'low':1},
  {"date": "2000-01-03", "equipment": 80, "harvest": 303, 'day':1, 'low':0},
  {"date": "2000-01-04", "equipment": 90, "harvest": 443, 'day':1, 'low':0},
  {"date": "2000-01-05", "equipment": 10, "harvest": 243, 'day':1, 'low':0},
  {"date": "2000-01-06", "equipment": 30, "harvest": 83 , 'day':0, 'low':1},
  {"date": "2000-01-07", "equipment": 21, "harvest": 143, 'day':1, 'low':0},
  {"date": "2000-01-08", "equipment": 23, "harvest": 443, 'day':0, 'low':1},
  {"date": "2000-01-09", "equipment": 12, "harvest": 143, 'day':1, 'low':0},
];



function ChartGallery (props) {
  if (props.show) {
    return (
      <>
      <AreaChart
            width={600}
            height={200}
            data={yield_distribution}
            margin={{
              top: 50, right: 20, bottom: 20, left: 20,
            }}
          >
            <XAxis dataKey="yieldrange" >
              <Label value="Productivity" offset={-20} position="insideBottom" />
            </XAxis>
            <YAxis label={{ value: 'Number of workers', angle: -90, position: 'inside', textAnchor: 'insideLeft', offset: '-20'}}/>
            <Area dataKey="farmcount" stroke="#aaa" fill="#ddd">
              <LabelList dataKey="farmcount" position="top" offset={15} />
            </Area>
            <Tooltip />
        </AreaChart>
      <BarChart width={600} height={200} data={progress_data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis  type='number'/>
        <YAxis dataKey="name" type="category"/>
        <Bar dataKey="done" stackId="a" fill="#82ca9d" >
          <LabelList dataKey="percent_done" position="inside"  />  
        </Bar>
        <Bar dataKey="remaining" stackId="a" fill="#ddd" >
          <LabelList dataKey="percent_remaining" position="inside"  />  
        </Bar>
        <Tooltip />
      </BarChart>
      
      <ComposedChart layout="vertical" width={400} height={800} data={multicrop_multiregion_progress}
              margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <CartesianGrid stroke='#f5f5f5'/>
            <XAxis type="number"/>
            <YAxis dataKey="name" type="category"/>
            <Tooltip/>
            <Legend layout='vertical' algin='left'/>
            {/* <Area dataKey='progress' stroke="#8884d8" fill="#8884d8" /> */}
            <Bar dataKey='total_planted' barSize={30}  stackId='a' fill="#82ca9d">
            <LabelList dataKey='total_planted' position='insideRight'>
            </LabelList> 
            </Bar>
  
            <Bar dataKey='total_remaining' barSize={30} stackId='a' fill="#bbb" >
            <LabelList dataKey='total_remaining' position='insideRight'>
            </LabelList> 
            </Bar>
            
            <Bar dataKey='popcorn' barSize={10} fill='#D9B918'>
              <LabelList dataKey='popcorn' position='right'></LabelList>
            </Bar>
            <Bar dataKey='sunscreen' barSize={10} fill='#A66C26'>
            <LabelList dataKey='sunscreen' position='right'></LabelList>
            </Bar>
  
            <Bar dataKey='shoes' barSize={10} fill='#687312'>
              <LabelList dataKey='shoes' position='right'></LabelList>
            </Bar>
            <Bar dataKey='soymilk' barSize={10} fill='#324001'>
              <LabelList dataKey='soymilk' position='right'></LabelList>
            </Bar>
            <Bar dataKey='flour' barSize={10} fill='#023373'>
              <LabelList dataKey='flour' position='right'></LabelList> 
            </Bar>
        </ComposedChart>
  
      <ComposedChart layout="vertical" width={300} height={300} data={harvest_equipment_daily_progress} syncId='harvest_equipment_daily'
            margin={{top: 20, right: 0, bottom: 20, left: 20}}>
          <CartesianGrid stroke='#f5f5f5'/>
          <Legend verticalAlign='top'  algin='left'/>
          <XAxis xAxisId='harvest' type="number" orientation='top'reversed='true' />
          <YAxis  dataKey="date" type="category" />
          <Tooltip/>
          
          <Bar  xAxisId='harvest' dataKey='equipment' barSize={20} fill="#ddd">
          <LabelList dataKey='equipment' position='right'>
            </LabelList> 
          </Bar>
          <ReferenceLine xAxisId='harvest' x={0} strokeWidth={10} stroke='#666'/>
      </ComposedChart >
  {/* end of equipment chart */}
  {/* date chart in the middle */}
      {/* <ComposedChart layout="vertical" width={40} height={300} data={harvest_equipment_daily_progress} syncId='harvest_equipment_daily'
            margin={{top: 20, right: 30, bottom: 20, left: 30}}>
              <Legend verticalAlign='top'  algin='left'/>
              <XAxis hide='true' />
              <YAxis dataKey="date" type="category" hide='true'/>
              <Tooltip/>
              <Bar dataKey="day"  fill="#205520" />
              <Bar dataKey="low" stackId="a" fill="#82ca9d" />
              
      </ComposedChart> */}
  {/* date chart */}
      
      <ComposedChart layout="vertical" width={300} height={300} data={harvest_equipment_daily_progress} syncId='harvest_equipment_daily'
            margin={{top: 20, right: 20, bottom: 20, left: 10}}>
          <CartesianGrid stroke='#f5f5f5'/>
          <XAxis xAxisId='harvest' type="number" orientation='top' />
          {/* jesus, I mispelled datakey to datekey and there's no error */}
          <YAxis dataKey="date" type="category" orientation='right' />
          
          <Tooltip/>
          <Legend verticalAlign='top'  algin='left'/>
          
       
          <Bar xAxisId='harvest' dataKey='harvest' barSize={20}   fill="#82ca9d">
            <LabelList dataKey='harvest' position='insideRight'>
            </LabelList> 
          </Bar>
      </ComposedChart>
  
  
      {/* trying to merge the two chart */}
      
      {/* end of merge */}
      
  
      </>
    );
   } //end if props tue 
   else {return null;}
  
}

export default ChartGallery;