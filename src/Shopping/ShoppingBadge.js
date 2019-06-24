import React, { Component } from "react";
import { connect } from "react-redux";


class ShoppingBadge extends Component {
  render() {
    return <React.Fragment>{this.props.total}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

export default connect(mapStateToProps)(ShoppingBadge);
