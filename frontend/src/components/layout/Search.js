import React, { useState } from "react";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <form method="post" id="search_form-one" onSubmit={searchHandler}>
      <div className="hero-search-form search-form-style-one">
        <input
          type="text"
          placeholder="Search Your Products..."
          className="search-field"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" className="search-submit" onClick={searchHandler}>
          SEARCH
        </button>
      </div>
    </form>
  );
};

export default Search;
