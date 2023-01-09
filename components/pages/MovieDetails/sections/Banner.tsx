/* eslint-disable @next/next/no-img-element */
import { GlobalContext } from 'pages/_app';
import React, { useContext } from 'react';

const Banner = () => {
  const { movieDetails }: any = useContext(GlobalContext);

  return (
    <div className="container">
      <div className="flex lg:flex-row flex-col my-10">
        <div className="overflow-hidden w-full sm:w-[300px] h-auto">
          <img
            className="w-full h-full object-fill"
            src={movieDetails?.Poster}
            alt={movieDetails?.Title}
          />
        </div>
        <div className="lg:ml-5 pt-3 lg:pt-0 lg:p-4 flex-1">
          <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
            {movieDetails?.Title}
          </h3>
          <div className="text-white pt-3 space-y-1">
            <p>Director: {movieDetails?.Writer}</p>
            <p>Writer: {movieDetails?.Writer}</p>
            <p>Actors: {movieDetails?.Actors}</p>
            <p>IMdB Votes: {movieDetails?.imdbVotes}</p>
            <p>Plot: {movieDetails?.Plot}</p>
            <p>Awards: {movieDetails?.Awards}</p>
            <p>Released: {movieDetails?.Released}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
