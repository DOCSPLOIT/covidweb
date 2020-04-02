import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../Styles/home.css'
const slideImages = [
    'https://raw.githubusercontent.com/m3tasploit/projectfiles/master/slides/first.jpeg',
    'https://raw.githubusercontent.com/m3tasploit/projectfiles/master/slides/second.jpeg',
    'https://raw.githubusercontent.com/m3tasploit/projectfiles/master/slides/third.jpeg',
    'https://raw.githubusercontent.com/m3tasploit/projectfiles/master/slides/fourth.jpeg',
    'https://raw.githubusercontent.com/m3tasploit/projectfiles/master/slides/fifth.jpeg',
    'https://raw.githubusercontent.com/m3tasploit/projectfiles/master/slides/sixth.jpeg',
    'https://raw.githubusercontent.com/m3tasploit/projectfiles/master/slides/seventh.jpeg',
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
}

const SlideShow = () => {
    return (
        <div className="slide-container">
       <br/>
     
            <Slide {...properties}>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[3]})` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[4]})` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[5]})` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[6]})` }}>
                    </div>
                </div>

            </Slide>
           
        </div>
    )
}

export default SlideShow;

