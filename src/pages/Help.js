import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles"

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
       {/* remember this is JSX */}
      <div>
        <h1>
         Help 
        </h1>
        <p>
          <ul>
            <li>
              item 1 - add your help center link here
            </li>
            <li>
              item 2 - (TBD) add your chat bot / phone number here.
            </li>
            <li>
              item 3 - TBD - <a href="javascript:void"> code link</a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FlatButtons);
