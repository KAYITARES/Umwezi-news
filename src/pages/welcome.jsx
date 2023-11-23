import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../sass/_main.scss';
import { Carousel } from 'antd';
import News from '../assets/constant/News.json'
import Button from '../components/Button';
import Card from '../components/Card'



function Welcome() {

    return (
        <div className='welcome-container'>
            <Header />
            <Carousel autoplay={true} autoplaySpeed={3000}>

                {News.slice(-3).reverse().map((newz) => (
                    <div className='bgImage' >
                        <img src={newz.newsImage[0]} alt='image' />
                        <p>{newz.newsMainTitle}</p>
                        <div className="position">
                            <Button name="Read-More" backgrounds="red" textColor="white" ></Button>
                        </div>
                    </div>
                ))}


            </Carousel>

            <Card />


            <Footer />
        </div>
    )
}
export default Welcome;