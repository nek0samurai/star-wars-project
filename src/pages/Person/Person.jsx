import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_PERSON } from '../../constants/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { fetchData } from '../../utils/network';
import { getPeopleImg } from '../../services/gerPeopleData';

import styles from './Person.module.css';

const Person = ({ setErrorApi }) => {
  const { id } = useParams();
  const [charInfo, setCharInfo] = useState('');
  const [charName, setCharName] = useState('');
  const [charImg, setCharImg] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData(API_PERSON + `/${id}`);
      setErrorApi(!res);
      setCharImg(getPeopleImg(id));
      setCharInfo([
        { key: 'Gender', value: `${res.gender}` },
        { key: 'Birth', value: `${res.birth_year}` },
        { key: 'Height', value: `${res.height}` },
        { key: 'Mass', value: `${res.mass}` },
      ]);

      setCharName(res.name);
    })();
  }, []);

  return (
    <div className={styles.char__wrapper}>
      <img src={charImg} alt="" />
      <h1>{charName}</h1>
      <ul className={styles.char__list}>
        {charInfo &&
          charInfo.map(
            ({ key, value }) =>
              value && (
                <li className={styles.char__item} key={key}>
                  <span>
                    {key} : {value}
                  </span>
                </li>
              ),
          )}
      </ul>
    </div>
  );
};

export default withErrorApi(Person);
