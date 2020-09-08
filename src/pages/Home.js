import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
// import AddIcon from "@material-ui/icons/Add";
// import Icon from "@material-ui/core/Icon";
// import DeleteIcon from "@material-ui/icons/Delete";
// import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

const FlatButtons = props => {
  // const { classes } = props;
  return (
    <div>
      <div>
        <Typography variant='h3'>
          {/* congrats, you found me! */}
          Home here
        </Typography>
        
        <Typography variant='body1'>
          {/* congrats, you found me! */}
          No login needed. 
          To add stuff here, see 'Home.js'. 
          To see how other feature works, click around, and check how main app route to each feature under '/pages/'
        </Typography>
          

        
      </div>
    </div>
  );
};

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FlatButtons);
