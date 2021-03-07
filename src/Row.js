import React ,{useState,useEffect}from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import "./Row.css";
import movieTrailer from  "movie-trailer";




const base_url= "http://image.tmdb.org/t/p/w154"


function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([]);
    const[trailerUrl,setTrailerUrl]=useState("");
    useEffect(()=>{
        // whne this row loads this piece of code run
        async function fetchData(){
            const request =await axios.get(fetchUrl);
            
            setMovies(request.data.results);
            // above line put movie in srt movie and .data.results come from console
            return request;

        }
        fetchData();

    },[fetchUrl]);
    // fetch url is outside so every times its change it will re render it.
    const opts={height:"390",
        width:"100%",
            playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,},
}
const handleClick=(movie)=>{
    if(trailerUrl){
        setTrailerUrl("");
    }else{
        movieTrailer(movie?.name || "")
        .then((url)=>{
            // https://www.youtube.com/watch?v=VpmocE57-5I this code extract last part
            const urlParams= new URL("https://www.youtube.com/watch?v=VpmocE57-5I");
            setTrailerUrl(urlParams)

        }).catch((error)=>console.log(error));
    }
}


    return (
        <div className="row">
            <h2>{title}</h2>


            <div className="row__posters">
                {movies.map(movie=> (
                    <img 
                    key={movie.id}
                    onClick={()=>handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ?movie.poster_path :movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
           {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
