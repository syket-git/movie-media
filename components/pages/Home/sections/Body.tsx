import { GlobalContext } from 'pages/_app';
import React, { useContext } from 'react';
import MovieCard from './MovieCard';

const Body = () => {
  const { movies }: any = useContext(GlobalContext);
  console.log({ movies });
  return (
    <div className="container my-14">
      <div className="grid grid-cols-6 gap-6">
        {movies?.length > 0 &&
          movies?.map((movie: any, i: number) => (
            <MovieCard key={i} data={movie} />
          ))}
      </div>
    </div>
  );
};

export default Body;
