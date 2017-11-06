import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function SocialMedia(props) {
  const { classes } = props;
  return (
    <div>
      <IconButton href="https://github.com/SwarShah" target="_blank" className={classes.button}>
        <i className="fa fa-github" aria-hidden="true"></i>
      </IconButton>
      <IconButton href="https://twitter.com/swarshah_" target="_blank" className={classes.button}>
        <i className="fa fa-twitter" aria-hidden="true"></i>
      </IconButton>
      <IconButton href="https://www.facebook.com/swarMshah" target="_blank" className={classes.button}>
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </IconButton>
      <IconButton href="https://www.instagram.com/swarshah_" target="_blank" className={classes.button}>
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </IconButton>
      <IconButton href="https://ca.linkedin.com/in/swarshah12" target="_blank" className={classes.button}>
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </IconButton>
    </div>
  );
}

SocialMedia.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialMedia);
