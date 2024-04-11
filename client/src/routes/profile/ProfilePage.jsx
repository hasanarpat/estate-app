import Chat from '../../components/chat/chat';
import List from '../../components/list/List';
import './profilePage.scss';
import apiRequest from '../../lib/apirequest';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);
  const handleLogOut = async () => {
    try {
      await apiRequest.post('/auth/logout');
      updateUser(null);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className='profilePage'>
      <div className='details'>
        <div className='wrapper'>
          <div className='title'>
            <h1>User Information</h1>
            <button>Update profile</button>
          </div>
          <div className='info'>
            <span>
              Avatar:{' '}
              <img
                src={
                  currentUser.avatar ||
                  'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                }
                alt=''
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              Email: <span>{currentUser.email}</span>
            </span>
            <button onClick={handleLogOut}>Logout</button>
          </div>
          <div className='title'>
            <h1>My List</h1>
            <button>Create new Post</button>
          </div>
          <List />
          <div className='title'>
            <h1>Saved list</h1>
          </div>
          <List />
        </div>
      </div>
      <div className='chatContainer'>
        <div className='wrapper'>
          <Chat />
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
