import React from 'react';
import Instagramm from '../Img/akar-icons_instagram-fill.png';
import Video from '../Img/akar-icons_video.png';
import Twitter from '../Img/akar-icons_twitter-fill.png';

class Footer extends React.Component {
    render () {
        return (
            <footer className='footer'>
                <div className='footer-title'>All Rights Reserved © Travel Portal</div>
                <div className='footer-links'>
                    <img src={Instagramm} className='Instagramm-img link' alt="Instagramm"></img>
                    <img src={Video} className='Video-img link' alt="Video"></img>
                    <img src={Twitter} className='Twitter-img link' alt="Twitter"></img>
                </div>
            </footer>
        );
    }
}

export default Footer;