import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultsContext } from '../context/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultsContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === '/videos') {
        getResults(`${location.pathname.slice(0, -1)}/q=${searchTerm}&num=20`)
      };
      if (location.pathname === '/images') {
        getResults(`${location.pathname.slice(0, -1)}/q=${searchTerm}&num=20`)
      };
      if (location.pathname === '/news') {
        getResults(`${location.pathname}/q=${searchTerm}&num=20`)
      }
      else if(location.pathname === '/search'){
        getResults(`${location.pathname}/q=${searchTerm}&num=20`)
      }
    }

  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56" >
          {results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full" >
              <a href={link} target='_blank' rel='noreferrer' >
                <p className="text-sm" >
                  {link.length > 30 ? link.substring(0, 30) + '...' : link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700' >
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return (
        <div className='flex flex-wrap justify-center' >
          {results?.map(({ image, link: { href, title } }, index) => (
            <a className='sm:p-3 p-5' href={href} key={index} target='_blank' rel='noreferrer' >
              <img src={image?.src} alt={title} loading='lazy' className='rounded-md shadow-lg hover:scale-110 dark:shadow-blue-500/50'/>
              <p className='w-36 break-words text-sm mt-2'>
                {title}
              </p>
            </a>
          ))}
        </div>
      );
    case '/news':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center" >
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className="md:w-2/5 w-full" >
              <a href={links?.[0].href} target='_blank' rel='noreferrer' className="hover:underline" >
                <p className='text-lg dark:text-blue-300 text-blue-700' >
                  {title}
                </p>
              </a>
              <div className="flex gap-4" >
                <a href={source?.href} target='_blank' rel='noreferrer'>
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case '/videos':
      return(
        <div className="flex flex-wrap">
          {results?.map((video, index) => (
          <div key={index} className="p-2">
            {console.log(video, index)}
            <ReactPlayer url={video.additional_links?.[0].href} controls width='355px' height='200px' />
          </div>
          ))}
        </div>
      )

    default:
      return 'Error';
  }
}