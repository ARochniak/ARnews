import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { findNews } from '../../store/thunk';

import './index.css';
import searchSvg from './search.svg';

export const SearchPanel = ({ dispatch }) => {
  const [searchFieldClass, setSearchFieldClass] = useState(
    ' search-field_hide'
  );
  const searchField = useRef(null);
  const toggleSearchField = () => {
    const newClass =
      searchFieldClass === ' search-field_hide'
        ? ' search-field_show'
        : ' search-field_hide';
    setSearchFieldClass(newClass);
    if (newClass === ' search-field_show')
      setTimeout(() => {
        searchField.current.focus();
      }, 250);
  };
  const tabHandler = e => {
    if (e.key === 'Tab') setSearchFieldClass(' search-field_hide');
  };
  const submitHandler = e => {
    e.preventDefault();
    dispatch(findNews(searchField.current.value));
    setSearchFieldClass(' search-field_hide');
  };
  const clickHandler = e => {
    if (e.target.closest('.search-panel')) return false;
    setSearchFieldClass(' search-field_hide');
    return true;
  };
  useEffect(() => {
    window.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <form className="search-panel" onSubmit={submitHandler}>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        className="search-panel__field-toggle"
        type="button"
        onClick={toggleSearchField}
      >
        <img src={searchSvg} alt="search" />
      </button>
      <input
        className={`search-panel__field${searchFieldClass}`}
        ref={searchField}
        type="search"
        placeholder="search"
        tabIndex="-1"
        onKeyDown={tabHandler}
      />
    </form>
  );
};

export default connect()(SearchPanel);
