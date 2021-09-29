import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function MovieDisplay({movies}) {

    return (
        <div className='movieDisplayer'>

            { movies !== undefined ? movies.map(elem => (
            // <Link id={elem.id} >
            <div key={elem.id}  className='singleMovie'>
    
                     <i className='rating'>{elem.rating.kp}</i>
    
                    <img className='movieImg' src={elem.poster.url} alt={elem.name} />
             
                    <h6><abbr title={elem.alternativeName}>{elem.name}</abbr></h6>
                    <p>{elem.year}</p>
        
            </div>
        //   </Link>
        )) : null }
            
        
        </div>
    )
}












const stateToProp = state => ({
  movies: state.data.docs  
})


export default connect(stateToProp)(MovieDisplay)



