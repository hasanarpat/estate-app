import { useState } from 'react';
import './searchBar.scss';
import { Link } from 'react-router-dom';

const types = ['buy', 'rent'];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: 'buy',
    city: '',
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className='searchBar'>
      <div className='type'>
        {types.map((type) => (
          <button
            onClick={() => switchType(type)}
            key={type}
            className={query.type === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>
      <form action=''>
        <input
          type='text'
          name='city'
          placeholder='City Location'
          onChange={handleChange}
        />
        <input
          type='number'
          name='minPrice'
          min={0}
          max={10000000}
          placeholder='Min Price'
          onChange={handleChange}
        />
        <input
          type='number'
          name='maxPrice'
          min={0}
          max={10000000}
          placeholder='Max Price'
          onChange={handleChange}
        />
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          {' '}
          <button>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 512 512'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
            </svg>
          </button>
        </Link>
      </form>
    </section>
  );
};

export default SearchBar;
