import React, { useContext, useEffect } from 'react';
import MovieDetailsPage from '@/components/pages/MovieDetails';
import { GlobalContext } from 'pages/_app';

const MovieDetails = ({ data }: any) => {
  const { setMovieDetails }: any = useContext(GlobalContext);

  useEffect(() => {
    setMovieDetails(data);
  }, [data, setMovieDetails]);

  return <MovieDetailsPage />;
};

export const getServerSideProps = async (ctx: any) => {
  http: try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${ctx?.query?.id}&apikey=9578de9c`
    )
      .then((r) => r.json())
      .then((res) => res);

    return {
      props: { data: response },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: { data: [] },
  };
};

export default MovieDetails;
