import React from 'react';
import { Parallax } from 'react-parallax';
import NavBar from '../../Components/NavBar/NavBar';

// rubric63 - About page is visually appealing.

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  margin: '20px'
};
const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
};
const image1 =
  'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80';
const image2 =
  'https://images.unsplash.com/photo-1416339698674-4f118dd3388b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80';
const image4 =
  'https://images.unsplash.com/photo-1520784117156-c5ce16e134b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80';

const Aboutus = () => (
  <div>
    {' '}
    <NavBar />
    <div style={styles}>
      <Parallax bgImage={image1} strength={1000}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            dignissimos nemo nesciunt consectetur sunt impedit laborum odit
            libero aut quidem fugit magni incidunt. Dolore possimus soluta
            optio. Eaque, sit id!
          </div>
        </div>
      </Parallax>
      <h1>Who are we.? </h1>
      <Parallax bgImage={image2} strength={1500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            distinctio quasi? Suscipit, animi voluptatibus cumque sit obcaecati
            vero cum! Ab dignissimos veritatis, culpa hic sit at ea autem
            quaerat nobis!
          </div>
        </div>
      </Parallax>
      <h1>Our Services</h1>
      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={percentage => (
          <div>
            <div
              style={{
                position: 'absolute',
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                width: percentage * 1800,
                height: percentage * 400
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            sint iusto iure, quis doloribus aspernatur assumenda dolore fuga
            nostrum quibusdam libero odit, officiis optio omnis provident, odio
            illum aliquid dolorem.
          </div>
        </div>
      </Parallax>
    </div>
  </div>
);
export default Aboutus;
