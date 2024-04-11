import { useContext } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import './homepage.scss';
import { AuthContext } from '../../context/AuthContext';

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <main>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Find Real Estate & Get Your Dreams Place</h1>
          <p className='desc'>
            Commodo veniam exercitation exercitation eiusmod dolor ad veniam
            exercitation consectetur anim id ex. Dolore sunt fugiat fugiat eu
            non aliqua et mollit voluptate ea elit aliquip. Ut laboris eiusmod
            sint laboris aliquip qui.
          </p>
          <SearchBar />
          <div className='boxes'>
            <div className='box'>
              <h1>16+</h1>
              <span>Years Of Experiences</span>
            </div>
            <div className='box'>
              <h1>200</h1>
              <span>Award Gained</span>
            </div>
            <div className='box'>
              <h1>1200+</h1>
              <span>Property Ready</span>
            </div>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img alt='banner' src='/bg.png' />
      </div>
    </main>
  );
};

export default HomePage;
