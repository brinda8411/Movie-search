import React from 'react'
import Movie from "./Movie";

function final(movie) {
    return (
        <div>
            <div className="moo">
     <Movie title={movie.Title}
       year={movie.Year}
       plot={movie.Plot}
       poster={movie.Poster}
     />
     </div>
        </div>
    )
}

export default final;
