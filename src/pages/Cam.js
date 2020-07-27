import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles"

import VideoChat from '../../src/VideoChat';



const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  video: {
    width: "200px"
  }
});

// Injecting raw html test
// Note: js in raw html is not loaded when browser render the page 
function createMarkup() {
    return {__html: '<!DOCTYPE html><html lang="en"><h1>Video Chat Room!</h1></html>'};
  }
  
  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }


const Cam = props => {
  // const { classes } = props;
  return (
<>
    {/* <h1>Video Conference</h1> */}
    <MyComponent />
    <VideoChat style={{width: '200'}}/>
</>

  );
};

Cam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cam);
