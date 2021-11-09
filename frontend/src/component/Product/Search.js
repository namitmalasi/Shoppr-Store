import React, { Fragment, useState } from "react";
import "./Search.css";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push(`/products`);
    }
  };
  return (
    <Fragment>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="search"
          placeholder="Search a Product..."
          onChange={(e) => setKeyword(e.target.value)}
        ></input>
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
