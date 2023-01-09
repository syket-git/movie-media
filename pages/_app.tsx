import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createContext, useState } from 'react';

export const GlobalContext: any = createContext(null);

export default function App({ Component, pageProps }: AppProps) {
  const [text, setText] = useState('Superman');
  const [movieDetails, setMovieDetails] = useState(null);
  const [movies, setMovies] = useState([]);

  const initialValue = {
    text,
    setText,
    movies,
    setMovies,
    movieDetails,
    setMovieDetails,
  };

  return (
    <GlobalContext.Provider value={initialValue}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}
