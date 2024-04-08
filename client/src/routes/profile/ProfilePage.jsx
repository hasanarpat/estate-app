import Chat from '../../components/chat/chat';
import List from '../../components/list/List';
import './profilePage.scss';
import apiRequest from '../../lib/apirequest';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const res = await apiRequest.post('/auth/logout');
      localStorage.removeItem('user');
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
                src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=''
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              Email: <span>johndoe@email.com</span>
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
