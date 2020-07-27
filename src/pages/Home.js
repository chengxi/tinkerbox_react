import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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
        <h1>
          Hello Home
        </h1>
      </div>
    </div>
  );
};

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FlatButtons);
