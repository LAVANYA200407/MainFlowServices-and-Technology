import React ,{useState} from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';

const MovieList = () => {
    const[SearchTerm,setSearchTerm]= useState('');
    const[movies, setMovies] = useState([]);

    const handleChange = (Event) => {
        setSearchTerm(Event.target.value);
    };
     
    const handleSubmit = async (Event) => {
        Event.preventDefault();
        try{ 
            const  response=await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=e9fb2e6b")
            setMovies(response.data.search);
        }
        catch (error){
            console.error('error');
        }
    };
    return (
        <div className='container mt-4'>
            <form onSubmit={handleSubmit}> {/* camelcase "on submit"*/ }
                <div className='input-group mb-3'>
                    <input
                     type='text'
                     className='form-control'
                     placeholder='search movies...'
                     value={SearchTerm} //corrected :"value" instead of "values"
                     onChange={handleChange}
                   />
                   <button className='btn btn-outline-primary ' type='submit'> 
                      search
                    </button>
                   <div className='row'>
                    {movies && movies.map((movie)=>(
                        <div className='col-md-4 mb-4' key={movie.imdbID}>
                            <MovieItem movie={movie}/>

                        </div>

                    ))}

                   </div>
                </div>

            </form>

        </div>
    );
};

export default MovieList;