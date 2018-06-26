import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return(
    <div className = "pa2 tc">
      <input 
        className = "pa3 tc ba b--green bg-washed-blue"
        type = "search"
        placeholder = "Enter a character"
        onChange = {searchChange}
      />
    </div>
  );
}

export default SearchBox;