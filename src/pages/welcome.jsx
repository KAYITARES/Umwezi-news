import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../sass/_main.scss';
import { Carousel } from 'antd';
import Button from '../components/Button';




function Welcome() {
    return (
        <div className='welcome-container'>
            <Header />
            <Carousel autoplay={true} autoplaySpeed={3000}>
                <div className='bgImage' >
                    <img src='https://images.pexels.com/photos/3856050/pexels-photo-3856050.jpeg?' alt='image' />
                    <p>Phone mugihe cyo kwiga</p>
                    <div className="position">
                        <Button name="Read-More" backgrounds="red" textColor="white" ></Button>
                    </div>

                </div>

                <div className='bgImage' >
                    <img src='https://images.pexels.com/photos/4238521/pexels-photo-4238521.jpeg?' alt='image' />
                    <p>Gusoma ni byiza</p>
                    <div className="position">
                        <Button name="Read-More" backgrounds="red" textColor="white" ></Button>
                    </div>
                </div>

                <div className='bgImage' >
                    <img src='https://images.pexels.com/photos/5778226/pexels-photo-5778226.jpeg?' alt='image' />
                    <p>Indege ya kayitare</p>
                    <div className="position">
                        <Button name="Read-More" backgrounds="red" textColor="white" ></Button>
                    </div>
                </div>
            </Carousel>
            <Footer />
        </div>
    )
}
export default Welcome;