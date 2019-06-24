import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { addToCart } from '../../Shopping/actions/cartActions';
import Media from 'react-media';
import ModalImage from 'react-modal-image';
import { Star } from '@material-ui/icons';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import ProductNav from '../NavBar/ProductNav';
class Home extends React.Component {
  state = {
    counter: 0,
    sort: false,
    points: 6
  };
  handleClick = id => {
    this.props.addToCart(id);
  };
  clicked = () => {
    this.setState({ sort: 1 });
  };
  render() {
    let itemList;
    if (this.state.sort === false) {
      itemList = (
        <div className="main-div" style={{ marginLeft: '-25px', marginBottom: '57px' }}>
          <Media query="(max-width: 600px)">
            {matches =>
              matches ? (
                <div className="root">
                  {' '}
                  {this.props.items.map(item => (
                    <Grid container>
                      <Grid item sm={12} xs={12} md={12}>
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
                            <Typography
                              style={{
                                fontSize: '16px',
                                fontWeight: 'revert',
                                color: 'grey'
                              }}
                            >
                              {item.stock}
                              {item.description}
                            </Typography>{' '}
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
                      </Grid>
                    </Grid>
                  ))}
                </div>
              ) : (
                <div className="root">
                  {this.props.items.map(item => (
                    <Grid container>
                      <Grid item lg={3} sm={12} xs={12} md={12} />
                      <Grid item lg={6} sm={12} xs={12} md={12}>
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
                            <Typography
                              style={{
                                fontSize: '14px',
                                fontWeight: 'revert',

                                color: 'grey'
                              }}
                            >
                              {item.description}
                            </Typography>{' '}
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
                      </Grid>
                      <Grid item lg={3} sm={12} xs={12} md={12}>
                        {' '}
                      </Grid>
                    </Grid>
                  ))}
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
            {' '}
            <ProductNav back="/page2" />{' '}
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
    items: state.items.slice(20, 21)
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
)(Home);
