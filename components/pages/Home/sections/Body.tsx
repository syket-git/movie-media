/* eslint-disable @next/next/no-img-element */
import { GlobalContext } from 'pages/_app';
import React, { useContext } from 'react';
import MovieCard from './MovieCard';

const Body = () => {
  const { movies }: any = useContext(GlobalContext);
  console.log({ movies });
  return (
    <div className="container my-14">
      {movies?.length > 0 ? (
        <div className="grid grid-cols-6 gap-6">
          {movies?.map((movie: any, i: number) => (
            <MovieCard key={i} data={movie} />
          ))}
        </div>
      ) : (
        <div className="w-full mt-20">
          <img
            src="./not-found.svg"
            className="mx-auto w-[300px]"
            alt="Not Found Image"
          />
        </div>
      )}
    </div>
  );
};

export default Body;
