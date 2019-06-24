import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MenuList } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

//  rubric19 - The user shall see a category menu that displays all the available shopping categories.
// rubric25 - Clicking on a category name in the category menu should toggle a dropdown of the available subcategories within that category.
// rubric26 - Clicking on a subcategory should repopulate the grid of products with items from the subcategory that was just clicked. 
// rubric15 - The user shall see a section in the controls bar that displays the selected category name 

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>Household and Beauty</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <MenuList>
            <MenuItem>
              {' '}
              <Link to="/page2"> Household Supplies </Link>{' '}
            </MenuItem>

            <MenuItem>
              {' '}
              <Link to="/page1"> Drug Store </Link>{' '}
            </MenuItem>

            <MenuItem>
              {' '}
              <Link to="/home"> Baby Care </Link>{' '}
            </MenuItem>
          </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Perishable</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MenuList>
            <Link to="/page6"> Dairy Products </Link>
          </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Produce</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <MenuList>
            <MenuItem>
              {' '}
              <Link to="/page3"> Fruits </Link>{' '}
            </MenuItem>
            <MenuItem style={{ marginRight: '10px' }}>
              {' '}
              <Link to="/page5"> Cooking and Baking </Link>{' '}
            </MenuItem>
          </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Pantry Items</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <MenuList>
            <MenuItem>
              {' '}
              <Link to="/page4"> Pickle </Link>{' '}
            </MenuItem>
          </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '200px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));
