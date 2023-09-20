import PropTypes from 'prop-types';
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleSearch(searchInput);
  };

  return (
    <form
      className="w-full md:w-[50%] mx-auto mb-4 relative"
      onSubmit={submitHandler}
    >
      <input
        id="suffix"
        className="w-full px-2 py-1 border-gray-300 border-solid border-2 
          rounded-md bg-transparent text-black focus:outline-none"
        type="text"
        placeholder=""
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div>
        <button
          type="submit"
          className="absolute inset-0 left-auto p-3 cursor-pointer"
        >
          <BiSearchAlt className="text-gray-300" />
        </button>
      </div>
    </form>
  );
};
SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default SearchBar;
