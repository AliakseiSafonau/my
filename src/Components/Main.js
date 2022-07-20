import React from 'react';
import { Carousel } from '../Carousel'
import Vector1 from'../Img/Vector1.png';
import Vector2 from'../Img/Vector2.png';
import Vector3 from'../Img/Vector3.png';


class Main extends React.Component {
    render () {
        return (
            <main className='main'>
                <section className="preview">
                    <p className="explore">Explore the beauty of the World</p> 
                    <p className="recommendations">Receive personalized recommendations for countries, hotels, activities and more</p>
                    <form className="search">
                        <input type="search" className="search-inpt" placeholder="What would you like to do?"></input>
                        <button type="submit" className="search-btn">Start Planning</button>
                    </form>
                </section>
                <section className="steps">
                    <div className='steps_title'>3 STEPS TO THE PERFECT TRIP</div>
                    <div className='frames'>
                        <div className='frame left'>
                            <div className='frm-wants'>
                                <div className='frm-wants cube'>
                                    <img src={Vector1} alt="vector"></img>
                                </div>
                                <div className='wants cube-title'>Tell us what you want to do</div>
                            </div>
                        </div>
                        <div className='frame centre'>
                            <div className='frm-dates'>
                                <div className='frm-date cube'>
                                    <img src={Vector2} alt="vector"></img>
                                </div>
                                <div className='date cube-title'>Share us preferable dates</div>
                            </div>
                        </div>
                        <div className='frame right'>
                            <div className='frm-recommendations'>
                                <div className='frm-recommendation cube'>
                                    <img src={Vector3} alt="vector"></img>
                                </div>
                                <div className='recommendation cube-title'>We will give you recommendations</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="destinations">
                    <div className='destinations-title'>POPULAR DESTINATIONS</div>
                    <Carousel>
                        <div className='image image-1'></div>
                        <div className='image image-2'></div>
                        <div className='image image-3'></div>
                    </Carousel>
                    
                </section>
                <section className="stories">

                </section>

            </main>
        );
    }
}

export default Main;