import {useState, useEffect, Children, cloneElement} from 'react';
import './Carousel.css';

export const Carousel = ({children}) => {
    const [images, setImages] = useState([])
    const [offset, setOffset] = useState(0)

    let ellipses = [-860, 0, 860]
    
    const handlerEllipses = (arr, x) => {
        let result = arr.map(item => {
            if (x === item) { return 'active-ellipse'} else return '';
        })

        return result;
    }

    const handlerLeft = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + 860;
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
            <div className='ellipses'>
                <div className={`ellipse first-ellipse ${handlerEllipses(ellipses, offset)[2]}`}></div>
                <div className={`ellipse second-ellipse ${handlerEllipses(ellipses, offset)[1]}`}></div>
                <div className={`ellipse third-ellipse ${handlerEllipses(ellipses, offset)[0]}`}></div>
            </div>
        </div>
    )
}