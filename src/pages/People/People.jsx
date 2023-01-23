import React from 'react';
import { useEffect } from 'react';
import { fetchData, changeHttp } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { useQueryParams } from '../../hooks/useQueryParams';
import { useState } from 'react';
import { getPeopleId, getPeopleImg, getPeoplePageID } from '../../services/gerPeopleData';
import PeopleList from '../../components/PeopleList/PeopleList';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import Loading from '../../components/Loading/Loading';
import PeopleNav from '../../components/PeopleNav/PeopleNav';

const People = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const query = useQueryParams();
  const queryPage = query.get('page');

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
      setNextPage(changeHttp(data.next));
      setPrevPage(changeHttp(data.previous));
      setCurrentPage(getPeoplePageID(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    fetchApiResource(API_PEOPLE + queryPage);
  }, [queryPage]);

  return (
    <>
      <PeopleNav
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        fetchApiResource={fetchApiResource}
      />
      {people ? <PeopleList people={people}></PeopleList> : <Loading />}
    </>
  );
};

export default withErrorApi(People);
