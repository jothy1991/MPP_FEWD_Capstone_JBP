import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import HomeNav from '../NavBar/HomeNav';


class ProductCarousel extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeNav />

        {/* rubric04 - The user should see some text welcoming them to the website */}
        <header 
          className="header"
          style= {{
          fontSize: '40px',
          padding: '5px',
          marginTop: '5%',
          marginBottom: '5%',
          marginLeft: '10%',
          color: '#4e50e0'
          }}>
          Welcome to WorldWide Importers
        </header>
       
            
        {/** rubric11 - Whenever the product carousel changes it slide, it should do in an animated way**/}
        
        <div className="container" style={{ marginBottom: '150px' }}>
          <Carousel
            autoPlay={true}
            stopOnHover={true}
            transitionTime={300}
            infiniteLoop={true}
            showThumbs={false}
            dynamicHeight={true} >
            <div>
            
            {/*  rubric01 - The user should see a product carousel that contains at least 3 slides of products.
            rubric09 - If the user clicks on a product image, they should be taken to a product page that is populated with the details of the clicked product */}

              <a href="http://localhost:3000/3" >
                < img
                  src="https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babyBottle.png"
                  style={{ width: '100%', maxHeight: '600px', backgroundColor: '#ebedf0'}}
                />
                <p
                  className="legend"
                  style={{
                    background: '#4e50e0',
                    color: 'white',
                    opacity: 1,
                  }}>
                  Go to Featured Product
              </p>
              </a>
            </div>

            <div>
              <a href="http://localhost:3000/10">
                <img
                  src="https://webmppcapstone.blob.core.windows.net/drugs-royaltyfree/bandage.png"
                  alt="pic2"
                  style={{ width: '100%', maxHeight: '600px', backgroundColor: '#ebedf0' }}
                />
                <p
                  className="legend"
                  style={{
                    background: '#4e50e0',
                    color: 'white',
                    opacity: 1,
                  }}>
                  Go to Featured Product
              </p>
              </a>
            </div>


            <div>
              <a href="http://localhost:3000/25">
                <img
                  src="https://webmppcapstone.blob.core.windows.net/beverages-royaltyfree/cranberryjuice.png"
                  alt="pic3"
                  style={{ width: '100%', maxHeight: '600px', backgroundColor: '#ebedf0' }}
                />
                <p
                  className="legend"
                  style={{
                    background: '#4e50e0',
                    color: 'white',
                    opacity: 1,
                  }}>
                 Go to Featured Product
              </p>
              </a>
            </div>

          </Carousel>
        </div>
      </React.Fragment>
    );
  }
}
export default ProductCarousel;
