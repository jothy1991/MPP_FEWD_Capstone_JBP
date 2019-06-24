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



// rubric14 - The user shall see a controls bar
// rubric15 - 

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
                aria-label="Open drawer"
              >
                <Link to="/" style={{ textDecoration: 'none' }}>
                  {' '}
                  WorldWide Importers{' '}
                </Link>
              </IconButton>
            </div>
{/** rubric18 - The user shall see a "Sort By Price" option**/}

            <div className={classes.grow}>
              {' '}
              <Button
                variant="outlined"
                color="primary"
                onClick={this.props.sort}
              >
                {' '}
                Sort By Price{' '}
              </Button>{' '}
            </div>
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
                </IconButton>
              </Link>
            </div>
            <div
              className={classes.sectionMobile}
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
    width: '100%'
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
    flexGrow: 1,
    marginLeft: '5px'
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
