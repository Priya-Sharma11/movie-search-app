import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieList from '../components/MovieList';


const Home = () => {
  const[movies,setMovies] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{

    axios.get('http://localhost:5000/movies')
    .then((response)=>{
      console.log(response.data)
      setMovies(response.data)
      setLoading(false);
    })
    .catch((error)=>{
      setError('Failed to fetch movies. Please try again.')
      setLoading(false);
    })
  
  },[])

  if(loading)return <p>Loading...</p>
  if(error) return <p>{error}</p>
  return (
    <div>
      <h1 style={
         {
          fontSize: '2.5rem',            
        fontWeight: 'bold',          
         color: 'blue',               
         textAlign: 'center',          
         marginTop: '20px',            
         marginBottom: '20px',         
         textTransform: 'uppercase',  
         letterSpacing: '2px',         
         fontFamily: "'Roboto', sans-serif",}
      }>Movies</h1>
      <MovieList movies={movies}/>
    </div>
  )
}

export default Home
