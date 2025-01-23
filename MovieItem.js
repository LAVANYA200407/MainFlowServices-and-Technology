import React from 'react';

const MovieItems = ({Movie}) => {
    return (
        <div className='card'>
            
            <img 
             src={Movie?.detail?.poster}
             alt={Movie?.Title}
            />
      
            <div className='card-body'>
                <h5 className='card-title'>{Movie?.Title}</h5>
                <p className='card-text'>{Movie?.year}</p>

            </div>

        </div>

    );

};

export default MovieItems;

 