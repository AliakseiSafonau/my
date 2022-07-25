import React from 'react';
import { Carousel } from '../Carousel'
import Vector1 from'../Img/Vector1.png';
import Vector2 from'../Img/Vector2.png';
import Vector3 from'../Img/Vector3.png';
import Vector4 from'../Img/Vector4.png';

class Main extends React.Component {
    render () {
        return (
            <main className='main'>
                <section className="preview">
                    <h1 className="explore">Explore the beauty of the World</h1> 
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
                    <button className='btn-find' type='button'>
                        <img className='btn-find_vector' src={Vector4} alt="vector"></img>
                        <div className='btn-find_titlle'>Find More</div>
                    </button>
                </section>
                <section className="stories">
                    <div className='stories_title'>TRAVEL STORIES</div>
                    <div className='story'>
                        <div className='story-img img1'></div>   
                        <div className='story-list'>
                            <div className='story-list_title'>10 Photos of Attractive Thailand</div>
                            <div className='story-list_about'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit... <span className='more-weight'>Read More</span>
                            </div>
                        </div>
                    </div>
                    <div className='story'>
                    <div className='story-img img2'></div>   
                        <div className='story-list'>
                            <div className='story-list_title'>Canyonlands National Park, Utah</div>
                            <div className='story-list_about'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit... <span className='more-weight'>Read More</span>
                            </div>
                        </div>
                    </div>
                    <div className='story'>
                    <div className='story-img img3'></div>   
                        <div className='story-list'>
                            <div className='story-list_title'>I left my heart in the Mountains!</div>
                            <div className='story-list_about'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit... <span className='more-weight'>Read More</span>
                            </div>
                        </div>
                    </div>
                    <div className='story'>
                        <div className='story-img img4'></div>   
                        <div className='story-list'>
                            <div className='story-list_title'>The Longest journey in my life!</div>
                            <div className='story-list_about'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit... <span className='more-weight'>Read More</span>
                            </div>
                        </div>
                    </div>
                    <button className='btn-stories' type='button'>
                        <img className='btn-stories_vector' src={Vector4} alt="vector"></img>
                        <div className='btn-stories_titlle'>See More</div>
                    </button>
                </section>
            </main>
        );
    }
}

export default Main;