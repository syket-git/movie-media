/* eslint-disable @next/next/no-img-element */
import { GlobalContext } from 'pages/_app';
import React, { useContext } from 'react';
import { DebounceInput } from 'react-debounce-input';

const Search = () => {
  const { text, setText }: any = useContext(GlobalContext);
  return (
    <div className="container mt-14 flex items-center justify-between">
      {text ? (
        <h4 className="text-white">
          searching by <span className="text-lg text-white">{`"${text}"`}</span>
        </h4>
      ) : (
        <h4 className="text-white">No result found!</h4>
      )}
      <div>
        <DebounceInput
          type="text"
          debounceTimeout={500}
          placeholder="Search here"
          className="border-b-2 border-white focus:outline-none text-white"
          style={{ background: 'transparent' }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
