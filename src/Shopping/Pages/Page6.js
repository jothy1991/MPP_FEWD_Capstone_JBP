import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import NavBar from '../../Components/NavBar/NavBar';
import GridList from '@material-ui/core/GridList';
import Media from 'react-media';
import ModalImage from 'react-modal-image';
import { Star } from '@material-ui/icons';
import uuid from 'uuid';
import { Link } from 'react-router-dom';

class Page6 extends React.Component {
  state = {
    counter: 0,
    sort: false,
    points: 6
  };
  handleClick = id => {
    this.props.addToCart(id);
  };
  render() {
    let itemList;
    if (this.state.sort === false) {
      itemList = (
        <div className="main-div">
          <h4 className="product-total"> Products (16)</h4>
          <Media query="(max-width: 600px)">
            {matches =>
              matches ? (
                <div className="root">
                  {' '}
                  <GridList cellHeight={370} cols={3} className="gridList">
                    {this.props.items.map(item => (
                      <Card className="cardMobile" key={uuid.v4()}>
                        <CardActionArea>
                          <Link to={'/' + item.id}>
                            <ModalImage
                              className="media"
                              small={item.imagelink}
                              large={item.imagelink}
                            />
                          </Link>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="h6"
                            >
                              {item.price}$
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions style={{ display: 'block' }}>
                          <Typography
                            style={{
                              fontSize: '16px',
                              fontWeight: '500',
                              opacity: '0.9',
                              marginLeft: '8px'
                            }}
                          >
                            {item.name}
                          </Typography>

                          {Array(item.rating).fill(
                            <Star style={{ fontSize: '15px' }} />
                          )}
                          <Button
                            style={{
                              background: '#696969',
                              width: '100%',
                              margin: '0px'
                            }}
                            variant="contained"
                            size="medium"
                            color="primary"
                            onClick={() => {
                              this.handleClick(item.id);
                              this.setState({
                                counter: this.state.counter + 1
                              });
                            }}
                          >
                            Add to Cart
                          </Button>
                        </CardActions>
                      </Card>
                    ))}
                  </GridList>
                </div>
              ) : (
                <div className="root">
                  <GridList cellHeight={370} cols={5} className="gridList">
                    {this.props.items.map(item => (
                      <Card key={item.id} className="shopping-card">
                        <CardActionArea>
                          <Link to={'/' + item.id}>
                            {' '}
                            <ModalImage
                              className="media"
                              small={item.imagelink}
                              large={item.imagelink}
                            />
                          </Link>
                          <CardContent>
                            <Typography
                              component="h6"
                              variant="h6"
                              color="primary"
                            >
                              $ {item.price}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions style={{ display: 'block' }} key={item.id}>
                          <p
                            key={item.imagelink}
                            style={{
                              fontSize: '16px',
                              fontWeight: '500',
                              opacity: '0.9',
                              marginLeft: '8px'
                            }}
                          >
                            {item.name}
                          </p>

                          {Array(item.rating).fill(
                            <Star style={{ fontSize: '15px' }} />
                          )}
                          <Button
                            style={{
                              background: '#696969',
                              width: '100%',
                              margin: '0px',
                              color: 'white'
                            }}
                            variant="contained"
                            size="medium"
                            onClick={() => {
                              this.handleClick(item.id);
                              this.setState({
                                counter: this.state.counter + 1
                              });
                            }}
                          >
                            Add To Cart
                          </Button>
                        </CardActions>
                      </Card>
                    ))}
                  </GridList>
                </div>
              )
            }
          </Media>
        </div>
      );
    }
    if (this.state.sort === true) {
      itemList = (
        <div className="main-div">
          <h4 className="product-total"> Products (16)</h4>
          <Media query="(max-width: 600px)">
            {matches =>
              matches ? (
                <div className="root">
                  {' '}
                  <GridList cellHeight={370} cols={3} className="gridList">
                    {this.props.items
                      .sort((a, b) =>
                        a.price > b.price ? 1 : b.price > a.price ? -1 : 0
                      )
                      .map(item => (
                        <Card className="cardMobile" key={uuid.v4()}>
                          <CardActionArea>
                            <Link to={'/' + item.id}>
                              <ModalImage
                                className="media"
                                small={item.imagelink}
                                large={item.imagelink}
                              />
                            </Link>
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h6"
                                component="h6"
                              >
                                {item.price}$
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions style={{ display: 'block' }}>
                            <Typography
                              style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                opacity: '0.9',
                                marginLeft: '8px'
                              }}
                            >
                              {item.name}
                            </Typography>

                            {Array(item.rating).fill(
                              <Star style={{ fontSize: '15px' }} />
                            )}
                            <Button
                              style={{
                                background: '#696969',
                                width: '100%',
                                margin: '0px'
                              }}
                              variant="contained"
                              size="medium"
                              color="primary"
                              onClick={() => {
                                this.handleClick(item.id);
                                this.setState({
                                  counter: this.state.counter + 1
                                });
                              }}
                            >
                              Add to Cart
                            </Button>
                          </CardActions>
                        </Card>
                      ))}
                  </GridList>
                </div>
              ) : (
                <div className="root">
                  <GridList cellHeight={370} cols={5} className="gridList">
                    {this.props.items
                      .sort((a, b) =>
                        a.price > b.price ? 1 : b.price > a.price ? -1 : 0
                      )
                      .map(item => (
                        <Card key={item.id} className="shopping-card">
                          <CardActionArea>
                            <Link to={'/' + item.id}>
                              <ModalImage
                                className="media"
                                small={item.imagelink}
                                large={item.imagelink}
                              />
                            </Link>
                            <CardContent>
                              <Typography
                                component="h6"
                                variant="h6"
                                color="primary"
                              >
                                $ {item.price}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions
                            style={{ display: 'block' }}
                            key={item.id}
                          >
                            <p
                              key={item.imagelink}
                              style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                opacity: '0.9',
                                marginLeft: '8px'
                              }}
                            >
                              {item.name}
                            </p>

                            {Array(item.rating).fill(
                              <Star style={{ fontSize: '15px' }} />
                            )}
                            <Button
                              style={{
                                background: '#696969',
                                width: '100%',
                                margin: '0px',
                                color: 'white'
                              }}
                              variant="contained"
                              size="medium"
                              onClick={() => {
                                this.handleClick(item.id);
                                this.setState({
                                  counter: this.state.counter + 1
                                });
                              }}
                            >
                              Add To Cart
                            </Button>
                          </CardActions>
                        </Card>
                      ))}
                  </GridList>
                </div>
              )
            }
          </Media>
        </div>
      );
    }

    return (
      <React.Fragment>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <NavBar
              counter={this.state.counter}
              sort={() => this.setState({ sort: !this.state.sort })}
            />
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            {' '}
            {itemList}{' '}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items.slice(62, 66)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page6);
