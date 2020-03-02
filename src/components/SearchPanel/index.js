import React, { useState } from 'react';
import './index.css';

const SearchPanel = () => {
  const [searchFieldClass, setSearchFieldClass] = useState(
    ' search-field_hide'
  );
  const toggleSearchField = () => {
    const newClass =
      searchFieldClass === ' search-field_hide'
        ? ' search-field_show'
        : ' search-field_hide';
    setSearchFieldClass(newClass);
  };
  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <form className="search-panel" onSubmit={submitHandler}>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        className="search-panel__submit"
        type="button"
        onClick={toggleSearchField}
      />
      <input
        className={`search-panel__field${searchFieldClass}`}
        type="search"
        placeholder="search"
      />
    </form>
  );
};

export default SearchPanel;
