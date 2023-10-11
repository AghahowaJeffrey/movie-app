import React, { useState, useEffect } from "react";
import shows from "../../assets/best-movies.png";
import star from "../../assets/Star.png";
import list from "../../assets/List.png";
import arrow from "../../assets/arrow.png";
import ticket from "../../assets/tickets.png";
import { useLocation } from "react-router-dom";

interface Detail {
  id: number;
  backdrop_path: string;
  genres: Genre[]; //
  original_title: string; //
  overview: string;
  popularity: number; //
  release_date: string; //
  runtime: number; //
  vote_average: number; //
  vote_count: number; //
}

interface Cast {
  id: number;
  cast: [Cast];
  crew: [Crew];
}

interface Cast {
  name: string;
}

interface Crew {
  name: string;
  job: string;
}

export interface Genre {
  id: number;
  name: string;
}

const main = () => {
  let { state } = useLocation();
  const [detail, setDetail] = useState<Detail>();
  const [cast, setCast] = useState<Cast>();

  const uri = "https://image.tmdb.org/t/p/original";

  const detailApi =
    "https://api.themoviedb.org/3/movie/" +
    state +
    "?api_key=97b6f1f078f3a3e794e0287e760c2e1d";
  const castApi =
    "https://api.themoviedb.org/3/movie/" +
    state +
    "/credits?api_key=97b6f1f078f3a3e794e0287e760c2e1d";

  const getDetail = async (API: Array<string>) => {
    try {
      const apiResponse = await Promise.all([fetch(API[0]), fetch(API[1])]);
      const data = await Promise.all(apiResponse.map((r) => r.json()));

      if (data) {
        setDetail(data[0]);
        setCast(data[1]);
      }
    } catch (error: any) {
      console.error("Something Went Wrong", error);
    }
  };

  useEffect(() => {
    getDetail([detailApi, castApi]);
  }, []);

  const toHoursAndMinutes = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  // Define the function to handle the mapping and concatenation
  const getStarsSting = (cast: Cast[], times: number): string => {
    let starString = '';

    for (let i = 0; i < times; i++) {
      const star = cast[i];

      starString += (starString === '' ? '' : ', ') + star.name;
    }

    return starString
  } 

  let stars = '';

  if (cast?.cast) {
  stars = getStarsSting(cast?.cast, 5)
  }

  // Define the function to handle the mapping and concatenation
  const getWritersString = (crew: Crew[], jobTitle: string, times: number): string => {
    let writerString = '';
    let notStatedCount = 0;

    for (let i = 0; i < times; i++) {
      const writer = crew[i];

      if (writer?.job === jobTitle) {
        writerString += (writerString === '' ? '' : ', ') + writer.name;
      } else {
        notStatedCount++;
      }
    }

    if (notStatedCount === times) {
      writerString = 'Not Stated';
    }

    return writerString;
  };
  
  const writers = getWritersString(cast?.crew || [], 'Original Film Writer', 5);

  return (
    <div className="m-6">
      <img
        className="w-full  rounded-xl"
        src={`${uri}${detail?.backdrop_path}`}
        alt=""
      />
      <div className="flex justify-between p-3 font-semibold">
        <div className="">
          <span className="font-bold">
            {detail?.original_title} . {detail?.release_date.slice(0, 4)}. PG-13
            . {toHoursAndMinutes(detail ? detail.runtime : 0)}
          </span>

          <span className="pl-5 text-red-500">Drama</span>
        </div>
        <div>
          <span className="flex items-center">
            <img className="ml-1 justify-end w-6 m-1" src={star} alt="" />
            <span>
              <span className="text-gray-400 pr-1">{detail?.popularity}</span>|
              {detail?.vote_count}k
            </span>
          </span>
        </div>
      </div>

      <div className="p-3 block sm:flex">
        <div className="sm:basis-[1000px] font-semibold mr-3">
          <p>{detail?.overview}</p>

          <div className="flex mt-7 border-b-1 border-gray-00">
            Director:&nbsp;
            <p className="text-red-600 font-semibold">{cast?.crew[0].name}</p>
          </div>

          <div className="flex mt-7 border-b-1 border-gray-00">
            Writers:&nbsp;
            {writers !== 'Not Stated' ? (
              <p className="text-red-600">{writers}</p>
            ) : (
              <p className="text-red-600">Not Stated</p>
            )}
          </div>

          <div className="flex mt-7 mb-5 border-b-1 border-gray-00">
            Stars:&nbsp;
            <span className="text-red-600">{stars}</span>
          </div>

          <div className="flex border border-gray-200 rounded-lg font-bold justify-between items-center">
            <div className="flex justify-between">
              <div className=" p-3 rounded-lg bg-red-700 text-white">
                Top Rated Movie #65
              </div>
              <p className="p-3 pl-6">Awards 9 nomimations</p>
            </div>
            <img className="w-7 h-7 mr-5" src={arrow} alt="" />
          </div>
        </div>

        <div className=" mt-6">
          <p className="bg-red-900 text-white justify-center py-3 rounded-lg flex items-center">
            <img className="pr-3" src={ticket} alt="" />
            See Showtimes
          </p>
          <p className="bg-red-200 font-semibold mt-2 py-3 rounded-lg border border-red-900 flex items-center justify-center">
            <img className="pr-3" src={list} alt="" />
            More watch options
          </p>
          <div className="relative rounded-lg mt-4 ">
            <img className="w-full" src={shows} alt="" />
            <div className="absolute p-4 bg-opacity-40 rounded-xl  bottom-1 blur-[7px] left-0 right-0 bg-neutral-900 text-white flex items-center "></div>
            <div className="absolute p-2 bg-opacity-70 rounded-xl bottom-0 left-0 right-0 bg-neutral-900 text-white flex items-center ">
              <img className="mx-2" src={list} alt=""></img>
              <p className=" text-xs font-semibold text-gray-300">
                The Best Movies and Shows in September
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
