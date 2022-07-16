import React from 'react';

class Preview extends React.Component {
    render () {
        return (
            <section className="preview">
                <p className="explore">Explore the beauty of the World</p> 
                <p className="recommendations">Receive personalized recommendations for countries, hotels, activities and more</p>
                <form className="search">
                    <input type="search" className="search-inpt" placeholder="What would you like to do?"></input>
                    <button type="submit" className="search-btn">Start Planning</button>
                </form>
            </section>
        );
    }
}

export default Preview;