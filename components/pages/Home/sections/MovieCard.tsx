/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const MovieCard = ({ data }: any) => {
 
  return (
    <Link href={`/movie/${data?.imdbID}`}>
      <div className="cursor-pointer">
        <div className="w-[200px] h-[300px] hover:scale-110 transition-all duration-200 overflow-hidden relative rounded">
          <img
            className="w-full h-full object-cover"
            src={data?.Poster}
            alt={data?.Title}
          />
        </div>
        <div className="text-white pt-4">
          <h5 className="text-medium truncate">{data?.Title}</h5>
          <p className="text-sm capitalize">
            {data?.Type}, {data?.Year}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
