import './filter.scss';

const Filter = () => {
  return (
    <div className='filter'>
      <p>
        Search results for <b>London</b>
      </p>
      <div className='top'>
        <div className='item'>
          <label htmlFor='city'>Location</label>
          <input
            type='text'
            name='city'
            id='city'
            placeholder='City Location'
          />
        </div>
      </div>
      <div className='bottom'>
        <div className='item'>
          <label htmlFor='type'>Type</label>
          <select name='type' id='type'>
            <option value=''>any</option>
            <option value='buy'>Buy</option>
            <option value='rent'>Rent</option>
          </select>
        </div>
        <div className='item'>
          <label htmlFor='property'>Property</label>

          <select name='property' id='property'>
            <option value=''>any</option>
            <option value='apartment'>Apartment</option>
            <option value='house'>House</option>
            <option value='condo'>Condo</option>
            <option value='land'>Land</option>
          </select>
        </div>
        <div className='item'>
          <label htmlFor='minPrice'>Min Price</label>
          <input
            type='number'
            name='minPrice'
            id='minPrice'
            placeholder='any'
          />
        </div>
        <div className='item'>
          <label htmlFor='maxPrice'>Max Price</label>
          <input
            type='number'
            name='maxPrice'
            id='maxPrice'
            placeholder='any'
          />
        </div>
        <div className='item'>
          <label htmlFor='bedroom'>Bedroom</label>
          <input type='number' name='bedroom' id='bedroom' placeholder='any' />
        </div>
        <button>
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            width={24}
            height={24}
            viewBox='0 0 512 512'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Filter;
