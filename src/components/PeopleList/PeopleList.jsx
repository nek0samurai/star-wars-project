import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../PeopleList/peopleList.module.css';

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ name, id, img }) => (
        <li key={id} className={styles.list__item}>
          <Link to={`/people/${id}`}>
            <img src={img} alt={name} className={styles.person__photo} />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
