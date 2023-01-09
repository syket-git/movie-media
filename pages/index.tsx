import HomePage from '@/components/pages/Home';
import { useContext, useEffect } from 'react';
import { GlobalContext } from './_app';

const Home = ({ data }: any) => {
  const { text, setMovies }: any = useContext(GlobalContext);

  useEffect(() => {
    setMovies(data?.Search);
  }, [data, setMovies]);

  useEffect(() => {
    const loadMovies = async () => {
      await fetch(`http://www.omdbapi.com/?apikey=9578de9c&s=${text}`)
        .then((r) => r.json())
        .then((res) => {
          setMovies(res?.Search);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    loadMovies();
  }, [text, setMovies]);

  return <HomePage />;
};

export const getServerSideProps = async () => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=9578de9c&s=Superman&size=30`
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

export default Home;
