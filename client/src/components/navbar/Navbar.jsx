import { useContext, useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <div className='left'>
        <Link className='logo' to='/'>
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 576 512'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M288 114.96L69.47 307.71c-1.62 1.46-3.69 2.14-5.47 3.35V496c0 8.84 7.16 16 16 16h149.23L192 439.19l104.11-64-60.16-119.22L384 392.75l-104.11 64L319.81 512H496c8.84 0 16-7.16 16-16V311.1c-1.7-1.16-3.72-1.82-5.26-3.2L288 114.96zm282.69 121.32L512 184.45V48c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v51.69L314.75 10.31C307.12 3.45 297.56.01 288 0s-19.1 3.41-26.7 10.27L5.31 236.28c-6.57 5.91-7.12 16.02-1.21 22.6l21.4 23.82c5.9 6.57 16.02 7.12 22.6 1.21L277.42 81.63c6.05-5.33 15.12-5.33 21.17 0L527.91 283.9c6.57 5.9 16.69 5.36 22.6-1.21l21.4-23.82c5.9-6.57 5.36-16.69-1.22-22.59z'></path>
          </svg>
          <span>Rahibinden</span>
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/agents'>Agents</Link>
      </div>
      <div className='right'>
        {currentUser ? (
          <div className='user'>
            <img
              src={
                currentUser.avatar ||
                'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              }
              alt=''
            />
            <span>{currentUser.username}</span>
            <Link to='/profile' className='profile'>
              <div className='notification'>3</div>Profile
            </Link>
          </div>
        ) : (
          <>
            <Link to='/login'>Sign in</Link>
            <Link to='/register' className='register'>
              Sign up
            </Link>
          </>
        )}
        <div className='menuIcon'>
          <svg
            onClick={() => setOpenMenu((prev) => !prev)}
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 512 512'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z'></path>
          </svg>
        </div>
        <div className={openMenu ? 'menu active' : 'menu'}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/agents'>Agents</Link>
          <Link to='/sign-in'>Sign in</Link>
          <Link to='/sign-up'>Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
