import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

// rubric72 - The footer bar should always be at the bottom of the page 

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    background: 'black',
    color: 'white'
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={12}>
      <Grid container>
        <Grid item lg={1} sm={1} xs={1} md={1} />
        <Grid item lg={7} sm={7} xs={7} md={7}>

          {/* rubric73 - User shall see a link to the home page */}
          {/* rubric76 - Clicking on the home page link should take the user to the home page */}
          <Link
            style={{
              textDecoration: 'none',
              fontSize: '16px',
              color: 'grey',
              fontWeight: 'bold',
              margin: '5px'
            }}
            to="/"
          >
            {' '}
            Home{' '}
          </Link>

          {/* rubric74 - User shall see a link to the about page */}
          {/* rubric77 - Clicking on the home page link should take the user to the about page */}
          <Link
            style={{
              textDecoration: 'none',
              fontSize: '16px',
              color: 'grey',
              fontWeight: 'bold',
              margin: '5px'
            }}

            to="/aboutus"
          >
            {' '}
            About Us{' '}
          </Link>

          {/* rubric78 - User shall see a link to the contact page */}
          {/* rubric78 - Clicking on the home page link should take the user to the contact page */}
          <Link
            style={{
              textDecoration: 'none',
              fontSize: '16px',
              color: 'grey',
              fontWeight: 'bold',
              margin: '5px'

            }}

            to="/contactus"
          >
            {' '}
            Contact Us{' '}
          </Link>

          <Typography style={{ color: 'white', marginTop: '20px' }}>
            &copy; WorldWide Importers.
          </Typography>
        </Grid>

        <Grid item lg={4} sm={4} xs={4} md={4}>
          <SocialIcon url="http://twitter.com" style={{ margin: '0px 2px' }} />
          <SocialIcon url="http://facebook.com" style={{ margin: '0px 2px' }} />
          <SocialIcon url="http://linkedin.com" style={{ margin: '0px 2px' }} />
          <SocialIcon url="http://instagram.com" style={{ margin: '0px 2px' }} />
        </Grid>
      </Grid>
    </Paper>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
