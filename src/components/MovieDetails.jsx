import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const {id} = useParams();
  const [movie,setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{
    axios.get(`http://localhost:5000/movies/${id}`)
    .then((response)=>{
      setMovie(response.data);
      setLoading(false);
    }).catch((error)=>{
      setError('Failed to fetch movie details. Please try again.')
      setLoading(false)
    })
  },[])

  if(loading)return <p>Loading...</p>
  if(error) return <p>{error}</p>
  if(!movie) return <p>No Movie Found</p>

  return (
    <div className='movie-details'> 
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title}/>

      <p className="description">{movie.plot}</p>
      <div className="details">
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Actor:</strong> {movie.actors}</p>
        <p><strong>Awards:</strong> {movie.awards}</p>
        <p><strong>Watch Trailer:</strong> <a href={movie.trailer} target="_blank" rel="noopener noreferrer">Click here</a></p>

      </div>
    </div>
  )
}

export default MovieDetails
