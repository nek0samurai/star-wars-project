import React from 'react';
import { Link } from 'react-router-dom';
import style from './PeopleNav.module.css';

const PeopleNav = ({ currentPage, nextPage, prevPage, fetchApiResource }) => {
  const handlePrev = () => fetchApiResource(prevPage);
  const handleNext = () => fetchApiResource(nextPage);
  return (
    <div className={style.button__row}>
      <Link to={`/people/?page=${currentPage - 1}`}>
        <button className={style.button__item} disabled={!prevPage} onClick={handlePrev}>
          Prev
        </button>
      </Link>
      <Link to={`/people/?page=${currentPage + 1}`}>
        <button className={style.button__item} disabled={!nextPage} onClick={handleNext}>
          Next
        </button>
      </Link>
    </div>
  );
};

export default PeopleNav;
