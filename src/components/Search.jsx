import React, {useState, useEffect} from 'react';
import { useDebounce } from 'use-debounce';

import { useResultsContext } from '../context/ResultContextProvider';
import{Links} from './Links';

export const Search = () => {
  const [text, setText] = useState('News Today');
  const {setSearchTerm} = useResultsContext('search');
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() =>{
    if(debouncedValue) setSearchTerm(debouncedValue);
  },[debouncedValue])

  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input 
      value={text}
      type= 'text'
      className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
      placeholder='Search...'
      onChange={(e)=> setText(e.target.value)}
      />
      {!text &&(
        <button  type='button' onClick={()=> setText('')} className='absolut top-1.5 right-5 text-2xl text-gray-500'>
          X
        </button>
      )}
      <Links />
    </div>
  )
};
