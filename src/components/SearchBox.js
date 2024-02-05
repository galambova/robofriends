import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        style={{ borderRadius: 150, margin: 20 }}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
