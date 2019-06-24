import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBadge from '../../Shopping/ShoppingBadge';
import { Link } from 'react-router-dom';
import Category from './Menu';
import { Button } from '@material-ui/core';


// The header bar should always be at the top of the page 

class NavBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    right: false
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  closeHandler = () => {
    this.setState({ right: false });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
      
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar
          style={{
            background: 'white',
            padding: '0px',
            color: 'black',
            margin: '0px'
          }}
        >
          <Toolbar style={{ borderBottom: '1px solid white' }}>
            <div style={{ borderRight: '1px solid black' }}>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Open drawer" >
    
     {/** rubric65 - User shall see a link to the home page  **/} 
     {/** rubric69 - Clicking the home page link should take the user to the home page  **/}           

                <Link to="/" style={{ textDecoration: 'none' }}>
                  {' '}
                  WorldWide Importers{' '}
                </Link>
              </IconButton>
            </div>

            <div className={classes.search}>
              {' '}

     {/**rubric66 - User shall see a link to the shopping page  **/}   
      {/**rubric70 - Clicking the shopping page link should take the user to the shopping page **/} 
      {/** rubric05 - The user should see a button labeled “Shop All”  **/} 
      {/** rubric12 - If the user clicks on the “Shop All” button, the user should be taken to the shopping page **/}       
              <Link to="/home" style={{ textDecoration: 'none' , margin:'15px'}}>
                {' '}
                <Button variant="contained" size="medium" color="primary">
                  {' '}
                  Shop All{' '}
                </Button>{' '}
              </Link>{' '}
            </div>
           
            <div className={classes.grow} />
            <div
              className={classes.sectionDesktop}
              style={{ borderLeft: '1px solid black' }}
            >
              <Category />
              <Link to="/cart">
                <IconButton
                  aria-label="Cart"
                  onClick={() => {
                    this.setState({ right: true });
                  }}
                >
                  <Badge
                    badgeContent={this.props.counter}
                    size="small"
                    color="primary"
                    classes={{ badge: classes.badge2 }}
                  />
                  <Badge
                    badgeContent={<ShoppingBadge />}
                    size="large"
                    classes={{ badge: classes.badge }}
                  >
                    {' '}
                    <ShoppingCartIcon style={{ color: 'black' }} />{' '}
                  </Badge>
                </IconButton>{' '}
              </Link>
            </div>
            <div
              className={classes.sectionMobile}
              style={{ borderLeft: '1px solid black' }}
            >
              <Category />

              {/**rubric67 - User shall see a link to the cart page **/}
              {/**rubric71- Clicking the cart page link should take the user to the cart page  **/}
              
              <Link to="/cart">
                <IconButton
                  aria-label="Cart"
                  onClick={() => {
                    this.setState({ right: true });
                  }}
                >
                  <Badge
                    color="primary"
                    size="small"
                    classes={{ badge: classes.badge2 }}
                  />
                  <Badge
                    badgeContent={<ShoppingBadge />}
                    size="large"
                    classes={{ badge: classes.badge }}
                  >
                    <ShoppingCartIcon
                      fontVariant="outlined"
                      style={{ color: 'black' }}
                    />{' '}
                  </Badge>
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: '70px'
  },
  badge: {
    top: '50%',
    marginTop: '20px',
    right: 12,
    display: 'block',
    padding: '0px',
    border: `0px solid ${
      theme.palette.type === 'light'
        ? theme.palette.grey[700]
        : theme.palette.grey[700]
      }`
  },
  badge2: {
    marginTop: -10,
    right: -20,
    display: 'block',
    padding: '1px',

    border: `0px solid ${
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
      }`
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },

  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

export default withStyles(styles)(NavBar);
