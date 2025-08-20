import React from 'react'
import { useSearchParams } from 'react-router';

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortchange = (e) => {
    const sortBy = e.target.value;
    searchParams.set('sortBy', sortBy);
    if (sortBy) {
      setSearchParams((prev) => {
        prev.set('sortBy', sortBy);
        return prev;
      });
    } else {
      setSearchParams((prev) => {
        prev.delete('sortBy');
        return prev;
      });
    }
  };
  return (
    <div className=' mb-4 flex justify-end items-center'>
        <select onChange={handleSortchange} value={searchParams.get('sortBy')|| ""} className='focus:outline-none border   rounded-md p-2' name="" id="sort">
            <option className='' defaultValue="Default" value="">Default</option>
            <option  value="priceAcs">Price: Low to High</option>
            <option  value="priceDesc">Price: High to Low</option>
            <option  value="popularity">Popularity</option>
        </select>
    </div>
  )
}

export default SortOptions