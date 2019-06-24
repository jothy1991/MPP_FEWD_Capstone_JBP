import React, { Component } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Contactus from '../src/Shopping/Pages/Contactus';
import Aboutus from '../src/Shopping/Pages/Aboutus';
import Home from '../src/Shopping/Pages/Home';
import Page1 from '../src/Shopping/Pages/Page1';
import Page2 from '../src/Shopping/Pages/Page2';
import Page3 from '../src/Shopping/Pages/Page3';
import Page4 from '../src/Shopping/Pages/Page4';
import Page5 from '../src/Shopping/Pages/Page5';
import Page6 from '../src/Shopping/Pages/Page6';
import ProductCarousel from './Components/Carousel/Carousel';
import fullpage1 from './Components/ProductPage/1';
import fullpage2 from './Components/ProductPage/2';
import fullpage3 from './Components/ProductPage/3';
import fullpage4 from './Components/ProductPage/4';
import fullpage5 from './Components/ProductPage/5';
import fullpage6 from './Components/ProductPage/6';
import fullpage7 from './Components/ProductPage/7';
import fullpage8 from './Components/ProductPage/8';
import fullpage9 from './Components/ProductPage/9';
import fullpage10 from './Components/ProductPage/10';
import fullpage11 from './Components/ProductPage/11';
import fullpage12 from './Components/ProductPage/12';
import fullpage13 from './Components/ProductPage/13';
import fullpage14 from './Components/ProductPage/14';
import fullpage15 from './Components/ProductPage/15';
import fullpage16 from './Components/ProductPage/16';
import fullpage17 from './Components/ProductPage/17';
import fullpage18 from './Components/ProductPage/18';
import fullpage19 from './Components/ProductPage/19';
import fullpage20 from './Components/ProductPage/20';
import fullpage21 from './Components/ProductPage/21';
import fullpage22 from './Components/ProductPage/22';
import fullpage23 from './Components/ProductPage/23';
import fullpage24 from './Components/ProductPage/24';
import fullpage25 from './Components/ProductPage/25';
import fullpage26 from './Components/ProductPage/26';
import fullpage27 from './Components/ProductPage/27';
import fullpage28 from './Components/ProductPage/28';
import fullpage29 from './Components/ProductPage/29';
import fullpage30 from './Components/ProductPage/30';
import fullpage31 from './Components/ProductPage/31';
import fullpage32 from './Components/ProductPage/32';
import fullpage33 from './Components/ProductPage/33';
import fullpage34 from './Components/ProductPage/34';
import fullpage35 from './Components/ProductPage/35';
import fullpage36 from './Components/ProductPage/36';
import fullpage63 from './Components/ProductPage/63';
import fullpage64 from './Components/ProductPage/64';
import fullpage65 from './Components/ProductPage/65';
import fullpage66 from './Components/ProductPage/66';
import Cart from './Shopping/Cart';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={ProductCarousel} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/home" exact component={Home} />
            <Route path="/contactus" component={Contactus} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
            <Route path="/page4" component={Page4} />
            <Route path="/page5" component={Page5} />
            <Route path="/page6" component={Page6} />
            <Route path="/1" component={fullpage1} />
            <Route path="/2" component={fullpage2} />
            <Route path="/3" component={fullpage3} />
            <Route path="/4" component={fullpage4} />
            <Route path="/5" component={fullpage5} />
            <Route path="/6" component={fullpage6} />
            <Route path="/7" component={fullpage7} />
            <Route path="/8" component={fullpage8} />
            <Route path="/9" component={fullpage9} />
            <Route path="/10" component={fullpage10} />
            <Route path="/11" component={fullpage11} />
            <Route path="/12" component={fullpage12} />
            <Route path="/13" component={fullpage13} />
            <Route path="/14" component={fullpage14} />
            <Route path="/15" component={fullpage15} />
            <Route path="/16" component={fullpage16} />
            <Route path="/17" component={fullpage17} />
            <Route path="/18" component={fullpage18} />
            <Route path="/19" component={fullpage19} />
            <Route path="/20" component={fullpage20} />
            <Route path="/21" component={fullpage21} />
            <Route path="/22" component={fullpage22} />
            <Route path="/23" component={fullpage23} />
            <Route path="/24" component={fullpage24} />
            <Route path="/25" component={fullpage25} />
            <Route path="/26" component={fullpage26} />
            <Route path="/27" component={fullpage27} />
            <Route path="/28" component={fullpage28} />
            <Route path="/29" component={fullpage29} />
            <Route path="/30" component={fullpage30} />
            <Route path="/31" component={fullpage31} />
            <Route path="/32" component={fullpage32} />
            <Route path="/33" component={fullpage33} />
            <Route path="/34" component={fullpage34} />
            <Route path="/35" component={fullpage35} />
            <Route path="/36" component={fullpage36} />
            <Route path="/63" component={fullpage63} />
            <Route path="/64" component={fullpage64} />
            <Route path="/65" component={fullpage65} />
            <Route path="/66" component={fullpage66} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
