import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Iframe from 'react-iframe'
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
  embedframe: {
    // width: "1000px"
  }
});


function Frames(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      
      <CssBaseline />
      <Typography variant="h4" >
        This is how you can embed all kinds of iframes for your prototype
      </Typography>
      <Grid item xs={12}>
      <Typography variant="h4" >
        Slide deck
      </Typography>
      <Iframe url="https://docs.google.com/presentation/d/e/2PACX-1vQWVtm7aebVCq9MDHjEqitJtPNOZK9ahU9kVeeVQj6eRUX9Z1N_vqHN6VRC_S0gS4FquF_LlI1y6e24/embed?start=false&loop=false&delayms=3000"
        width="1000px"
        height="450px"
        // id="myId"
        className="embedframe"
        display="initial"
        position="relative"
        />
      </Grid>

      <Grid item xs={12}>
      <Typography variant="h4" >
        Chart
      </Typography>
      <Iframe url="https://docs.google.com/spreadsheets/d/e/2PACX-1vTp7hkK3FpzFzFfRkNdJE9CbAUOvcUuIvZf-i9vk_fVOgDd9YXXncbWQPrXdB1nH40Uqq6UCz9bPOrG/pubchart?oid=714724209&amp;format=interactive"
        width="1000px"
        height="450px"
        // id="myId"
        className="embedframe"
        display="initial"
        position="relative"
        />
      </Grid>
      

    <Grid item xs={12}>
    <Typography variant="h4" gutterBottom>
        Maps
    </Typography>
    <Iframe url="https://www.google.com/maps/d/embed?mid=1ne-Gdyiqrvuf6raZKKC6ySmey2VMuB1A"
        width="1000px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </Grid>

    <Grid item xs={12}>
    <Typography variant="h4" gutterBottom>
        Sheets
    </Typography>
    <Iframe url="https://docs.google.com/spreadsheets/d/e/2PACX-1vTp7hkK3FpzFzFfRkNdJE9CbAUOvcUuIvZf-i9vk_fVOgDd9YXXncbWQPrXdB1nH40Uqq6UCz9bPOrG/pubhtml?widget=true&amp;headers=false"
        width="1000px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </Grid>
    
    <Grid item xs={12}>
    <Typography variant="h4" gutterBottom>
        Feedback Form
    </Typography>
    <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSdd942LU1YystWXhQslp_RIdL8uaHVxprjiYGN92y1KSXb3UQ/viewform?embedded=true"
        width="1000px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </Grid>
    

    </div>
  );
}

export default withStyles(styles)(Frames);
