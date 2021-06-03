import React from 'react';
import "./mov.css";
const Movie=({title,year,plot,poster})=> {
    return (
        <div>
            <h1 className="Head"> {title}</h1>
            <h4 className="y">{year}</h4>
            <h5 className="des">{plot}</h5>
            <img className="image"src={poster}alt=""></img>
        </div>
    )
}
export default Movie;
