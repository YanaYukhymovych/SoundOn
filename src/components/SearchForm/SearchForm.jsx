import React from 'react';
import './SearchForm.scss'
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';

const SearchForm = () => {
  return (
    <div className="searchForm">
      <input className="searchForm__input" type="text" />
      <IoSearchOutline className="searchForm__icon icon icon--search"/>
      <IoCloseOutline className="searchForm__icon icon icon--close" />
    </div>
  )
}

export default SearchForm;

