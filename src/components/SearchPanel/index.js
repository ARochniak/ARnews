import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { findNews } from '../../store/thunk';

import './index.css';
import searchSvg from './search.svg';

export const SearchPanel = ({ dispatch }) => {
  const [searchFieldClass, setSearchFieldClass] = useState(' field_hide');
  const searchField = useRef(null);
  const toggleSearchField = () => {
    const newClass = searchFieldClass === ' field_hide' ? '' : ' field_hide';
    setSearchFieldClass(newClass);
    if (newClass === '')
      setTimeout(() => {
        searchField.current.focus();
      }, 250);
  };
  const tabHandler = e => {
    if (e.key === 'Tab') setSearchFieldClass(' field_hide');
  };
  const submitHandler = e => {
    e.preventDefault();
    dispatch(findNews(searchField.current.value));
    setSearchFieldClass(' field_hide');
  };
  const clickHandler = e => {
    if (e.target.closest('.search-panel')) return false;
    setSearchFieldClass(' field_hide');
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
        className="search-panel__icon"
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
