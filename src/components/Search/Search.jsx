import React from "react";

const Search = ({ setDataFromChild }) => {

  const handleSearchChange = (e) => {
    setDataFromChild(e.target.value);
  };


  return (
    <div className="w-auto flex justify-center items-center">
      <input
        placeholder="Search"
        className="p-2 w-2/5 mr-3 flex rounded"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
