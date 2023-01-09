/* eslint-disable @next/next/no-img-element */
import React from 'react';

const MovieCard = ({ data }: any) => {
  console.log({ data });
  return (
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
  );
};

export default MovieCard;
