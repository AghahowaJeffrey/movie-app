import React, { useEffect, useState } from "react";
import peach from "../../assets/peach.png";
import imdb from "../../assets/imdb.png";
import Favorite from "../Home/Favorite";
import { Link } from "react-router-dom";
import { Data } from "./HomePage";
import { Result } from "./HomePage";

interface Props {
  movie: Result;
  loading: boolean;
}

interface Genre {
  genres: [
    {
      id: number;
      name: string;
    }
  ];
}

const uri = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie, loading }: Props) => {
  const [genre, setGenre] = useState<Genre>();

  const genreApi =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=97b6f1f078f3a3e794e0287e760c2e1d";

  const getGenre = async (API: string) => {
    try {
      const apiResponse = await fetch(API);
      const data: Genre = await apiResponse.json();

      if (data) {
        setGenre(data);
      }
    } catch (error: any) {
      console.error("Something Went Wrong", error);
    }
  };

  
  const getGenres = (movieGenre: Result, genre: Genre): string => {
    let genreString = "";

    for (let x = 0; x < movieGenre.genre_ids.length; x++) {
      for (let y = 0; y < genre.genres.length; y++) {
        const genreId = movieGenre.genre_ids[x];
        const genreList = genre.genres[y];
        console.log(genreList.id)

        if (genreId === genreList.id) {
         
          genreString += (genreString === "" ? "" : ", ") + genreList.name;
        }
      }
    }
    return genreString;
  };

  let genreName = '';
  if (genre) {
     genreName = getGenres(movie, genre);
  }
 

  useEffect(() => {
    getGenre(genreApi);
  }, []);


  return (
    <>
      {loading ? (
        <p className="text-xl text-center font-black">Loading...</p>
      ) : (
        <div className="mt-4 relative">
          <Favorite />
          <Link to="/movie" state={movie.id}>
            <img
              src={`${uri}${movie.poster_path}`}
              alt=""
              className="w-[250px] h-[370px]"
            />
            <p className="text-xs font-bold text-gray-400 pt-3">
              USA, {movie.release_date.slice(0, 4)}
            </p>
            <h3 className="text-lg font-bold text-gray-900 leading-3 pt-3 ">
              {movie.title}
            </h3>
            <div className="flex justify-between">
              <div className="flex items-center pt-3">
                <img src={imdb} alt="" className="w-10 pr-1" />
                <p className="text-xs font-normal text-gray-900 block">
                  {movie.vote_average * 10} / 100
                </p>
              </div>
              <div className="flex pt-3 items-center">
                <img src={peach} alt="" className="w-5 pr-1" />
                <p className="text-xs font-normal text-gray-900">
                  {Math.round(movie.popularity / 100)}%
                </p>
              </div>
            </div>
            <p className="text-xs font-bold text-gray-400 pt-3">
              {genreName}
            </p>
          </Link>
        </div>
      )}
    </>
  );
};

export default MovieCard;
