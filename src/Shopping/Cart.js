import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from './actions/cartActions';
import Recipe from './Recipe';
import { Add, Remove, Delete } from '@material-ui/icons';
import { Button } from '@material-ui/core';


// rubric47 -  The user should a table displaying the product image, name, unit price, quantity as an input field, total cost, and a remove button for each product in the shopping cart.
// rubric53 - The cost details section should update if any items are removed from the shopping cart of if any of the item quantities are updated.
// rubric54 - The remove button should remove an item from the shopping cart .
// rubric55 - The cost column in the table should update if the quantity input field is changed.
class Cart extends Component {
  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //to substract from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.imagelink} alt={item.imagelink} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{item.name}</span>

              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/cart">
                  <Add
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  />
                </Link>
                <Link to="/cart">
                  <Remove
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  />
                </Link>
              </div>

              <Delete
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              />
            </div>
          </li>
        );
      })
    ) : (
      <h4>Nothing</h4>
    );
    return (
      <div className="container">
        <Link to="/home">
          {' '}
          <Button
            size="large"
            variant="contained"
            color="default"
            style={{ marginTop: '50px' }}
          >
            Go To Shop
          </Button>
        </Link>
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
        <Recipe />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
