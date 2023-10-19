import { SearchedMovies } from "./Header";
import MovieCard from "./MovieCard";

interface Props {
    searchedMovies: SearchedMovies | undefined
}

const SearchPanel = ({searchedMovies}: Props) => {



  return (
    <>
    <div className="bg-white w-full z-10 flex flex-col content-center absolute">
        {searchedMovies?.results.map((movie) => <MovieCard key={movie.id} movie={movie} /> )}
    </div>
        
    
    </>
  )
}

export default SearchPanel