import './App.css';
import './media.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from './image/im1.jpeg';
import img2 from './image/im2.jpeg';
import img3 from './image/im3.jpeg';

function Slider() {
    return (
        <>
            <OwlCarousel className='owl-theme' items={1} dots={false} nav>
                <div class='item'>
                    <img src={img1}></img>
                    <div className='content'>
                        <h5>Emergency Services</h5>
                        <h5 className='tel'>Tel: (719) 445-2808</h5>
                        <p>Our experts will solve them in no time.</p>
                        <div className='btnn'>
                            <button className='btn1'>NEED EMERGENCY SERVICES?</button>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <img src={img2}></img>
                    <div className='content'>
                        <h5>We Provide Landscaping</h5>
                        <h5 className='tel'>Services Since 1993</h5>
                        <p>LETS TALK ABOUT YOUR IDEAS</p>
                        <div className='btnn'>
                            <button className='btn1'>NEED EMERGENCY SERVICES?</button>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <img src={img3}></img>
                    <div className='content'>
                        <h5 className='w-100'>The Grass is Always Greener on</h5>
                        <h5 className='tel'>Your Side of the Fence</h5>
                        <p>QUALITY THAT IS GUARANTEED</p>
                        <div className='btnn'>
                            <button className='btn1'>NEED EMERGENCY SERVICES?</button>
                        </div>
                    </div>
                </div>


            </OwlCarousel>
        </>
    )
}
export default Slider;