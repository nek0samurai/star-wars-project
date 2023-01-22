import React from 'react';
import { useEffect } from 'react';
import { fetchData } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { useState } from 'react';
import { getPeopleId, getPeopleImg } from '../../services/gerPeopleData';
import PeopleList from '../../components/PeopleList/PeopleList';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import Loading from '../../components/Loading/Loading';

const People = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);

  const fetchApiResource = async (url) => {
    const data = await fetchData(url);

    if (data) {
      const peopleList = data.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);

        return {
          name,
          id,
          img,
        };
      });

      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    fetchApiResource(API_PEOPLE);
  }, []);

  return people ? <PeopleList people={people}></PeopleList> : <Loading />;
};

export default withErrorApi(People);
