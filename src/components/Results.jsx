import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReacPlayer from 'react-player';
import { useResultsContext } from '../context/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultsContext();
  const location = useLocation();

  if (isLoading) return <Loading />;
  console.log(location.pathname);

  switch (location.pathname) {
    case '/search':
      return(
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56" >

        </div>
      );
    case '/images':
      return 'Search';
    case '/news':
      return 'Search';
    case '/videos':
      return 'Search';

    default:
      return 'Error';
  }
}