import './App.css';
import './media.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import Planting from './Planting';
import Tree from './Tree';
import Check from './Check';
import View from './View';
import Offer from './Offer';
import Garden from './Garden';
import Team from './Team';
function App() {
  return (
    <div>

      <Header/>
      <Slider/>
      <Planting/>
      <Tree/>
      <Check/>
      <View/>
      <Offer/>
      <Garden/>
      <Team/>
      <Footer/>


      

    </div>
  );
}

export default App;
