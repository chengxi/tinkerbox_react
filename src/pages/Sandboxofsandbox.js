import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Iframe from 'react-iframe'
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ChartGallery from './ChartGallery';


const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  subheader: {
    width: "100%"
  },
  
});


function Frames(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
     <ChartGallery show={true} />

    </div>
  );
}

export default withStyles(styles)(Frames);
