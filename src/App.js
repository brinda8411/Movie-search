import React,{useEffect,useState} from "react";
import Movie from "./Movie";
import './App.css';
import './mov.css';

function App() {
  const[movie,setMovie]=useState([]);
  const[search,setSearch]=useState("");
  const[click,setClick]=useState("");
  const url=`http://www.omdbapi.com/?apikey=9b5771b7&t=${click}`;
  const getMovies=async()=>{
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    setMovie(data);
  }
  const getSearch=e=>
{
  setSearch(e.target.value);
}
const getClick=e=>{
  e.preventDefault();
  setClick(search);
}
  
useEffect(() => {
 getMovies();
}, [click])
  return (
    <div>
    <form className="App" onSubmit={getClick}>
    <h1 className="heading">Get your Favorite Movies,Animes and Tv shows here!</h1>
     <input className="text-field" placeholder="Enter the Name of Movie or Tv show" type="text" value={search} onChange={getSearch}></input>
    <button className="search-field" type="submit" onClick={getClick}>Search</button>
     </form>
     <div className="moo">
     <Movie title={movie.Title}
       year={movie.Year}
       plot={movie.Plot}
       poster={movie.Poster}
     />
     </div>
     </div>
  );
}
export default App;
