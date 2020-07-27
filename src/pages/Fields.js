import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";


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
  }
});


function Fields(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Container maxWidth="sm">
        <h1>My Fields</h1>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </div>
  );
}

export default withStyles(styles)(Fields);
