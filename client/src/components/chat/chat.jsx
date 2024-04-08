import { useState } from 'react';
import './chat.scss';

const Chat = () => {
  const [chat, setChat] = useState(2);

  return (
    <div className='chat'>
      <div className='messages'>
        <p>Messages</p>

        <div className='message'>
          <img
            src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <span>John Doe</span>
          <p>Pariatur Lorem incididunt aute nostrud</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <span>John Doe</span>
          <p>Pariatur Lorem incididunt aute nostrud</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <span>John Doe</span>
          <p>Pariatur Lorem incididunt aute nostrud</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <span>John Doe</span>
          <p>Pariatur Lorem incididunt aute nostrud</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <span>John Doe</span>
          <p>Pariatur Lorem incididunt aute nostrud</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <span>John Doe</span>
          <p>Pariatur Lorem incididunt aute nostrud</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <span>John Doe</span>
          <p>Pariatur Lorem incididunt aute nostrud</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <span>John Doe</span>
          <p>Pariatur Lorem incididunt aute nostrud</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <span>John Doe</span>
          <p>Pariatur Lorem incididunt aute nostrud</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <span>John Doe</span>
          <p>Pariatur Lorem incididunt aute nostrud</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <span>John Doe</span>
          <p>Pariatur Lorem incididunt aute nostrud</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <span>John Doe</span>
          <p>Pariatur Lorem incididunt aute nostrud</p>
        </div>
      </div>
      {chat && (
        <div className='chatBox'>
          <div className='top'>
            <div className='user'>
              <img
                src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=''
              />
              John Doe
            </div>
            <span className='close' onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className='center'>
            <div className='chatMessage own'>
              <p>
                Et duis eiusmod ea anim proident id cupidatat irure fugiat anim
                dolore sint Lorem proident.
                <span>1 hour ago</span>
              </p>
            </div>
            <div className='chatMessage'>
              <p>
                Et duis eiusmod ea anim proident id cupidatat irure fugiat anim
                dolore sint Lorem proident.
                <span>1 hour ago</span>
              </p>
            </div>
            <div className='chatMessage'>
              <p>
                Et duis eiusmod ea anim proident id cupidatat irure fugiat anim
                dolore sint Lorem proident.
                <span>1 hour ago</span>
              </p>
            </div>
            <div className='chatMessage'>
              <p>
                Et duis eiusmod ea anim proident id cupidatat irure fugiat anim
                dolore sint Lorem proident.
                <span>1 hour ago</span>
              </p>
            </div>
            <div className='chatMessage own'>
              <p>
                Et duis eiusmod ea anim proident id cupidatat irure fugiat anim
                dolore sint Lorem proident.
                <span>1 hour ago</span>
              </p>
            </div>
            <div className='chatMessage own'>
              <p>
                Et duis eiusmod ea anim proident id cupidatat irure fugiat anim
                dolore sint Lorem proident.
                <span>1 hour ago</span>
              </p>
            </div>
            <div className='chatMessage'>
              <p>
                Et duis eiusmod ea anim proident id cupidatat irure fugiat anim
                dolore sint Lorem proident.
                <span>1 hour ago</span>
              </p>
            </div>
            <div className='chatMessage'>
              <p>
                Et duis eiusmod ea anim proident id cupidatat irure fugiat anim
                dolore sint Lorem proident.
                <span>1 hour ago</span>
              </p>
            </div>
            <div className='chatMessage'>
              <p>
                Et duis eiusmod ea anim proident id cupidatat irure fugiat anim
                dolore sint Lorem proident.
                <span>1 hour ago</span>
              </p>
            </div>
            <div className='chatMessage'>
              <p>
                Et duis eiusmod ea anim proident id cupidatat irure fugiat anim
                dolore sint Lorem proident.
                <span>1 hour ago</span>
              </p>
            </div>
          </div>
          <div className='bottom'>
            <textarea name='' id='' cols='30' rows='10'></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
