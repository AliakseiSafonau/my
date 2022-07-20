import {useState, useEffect, Children, cloneElement} from 'react';
import './Carousel.css';

export const Carousel = ({children}) => {
    
    const [images, setImages] = useState([])
    const [offset, setOffset] = useState(0)

    const handlerLeft = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + 860
            return Math.min(newOffset, 860);
        })
    }

    const handlerRight = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - 860
            return Math.max(newOffset, -860);
        })
    }

    useEffect(() => {
        setImages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: '800px',
                        maxWidth: '800px',
                    },
                })
            })
        )
    }, [])
    
    return (
        <div className='main-content'>
            <button className='arrow arrowLeft' onClick={handlerLeft}></button>
            <div className='window'>
                <div className='content' style={{
                    transform: `translateX(${offset}px)`
                }}>{images}</div>
            </div>
            <button className='arrow arrowRight' onClick={handlerRight}></button>
        </div>
    )
}