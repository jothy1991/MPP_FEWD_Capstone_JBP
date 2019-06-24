import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';


// The user should see a section showing the subtotal cost of all the items in the shopping cart, the shipping cost, the tax cost, and a total cost of all of the items in the shipping cost. 

class Recipe extends Component {
  render() {
    return (
      <div style={{ marginTop: '55px' }}>
        <p style={{ color: 'grey', marginLeft: '20px', fontWeight: 'bold' }}>
          OrderSummary{' '}
        </p>
        <p style={{ color: 'black', marginLeft: '20px' }}>
          Shipping*{' '}
          <span style={{ marginLeft: '150px', color: 'black' }}>Free</span>
        </p>
        <p style={{ color: 'black', marginLeft: '20px' }}>
          Tax* <span style={{ marginLeft: '190px', color: 'black' }}>Free</span>
        </p>
        <p style={{ color: 'black', marginLeft: '20px' }}>
          Total
          <span
            style={{
              marginLeft: '190px',
              color: 'black',
              display: 'inline-block'
            }}
          >
            {this.props.total}$
          </span>
        </p>

        {/** rubric50 - The user should see a checkout button**/}
        <Button
          size="medium"
          color="primary"
          variant="contained"
          style={{
            display: 'block',
            width: '92%',
            marginLeft: '20px',
            marginTop: '50px',
            marginBottom: '50%'
          }}
        >
          CheckOut
        </Button>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total,
    totalQauntities: state.totalQauntities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShipping: () => {
      dispatch({ type: 'ADD_SHIPPING' });
    },
    substractShipping: () => {
      dispatch({ type: 'SUB_SHIPPING' });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
