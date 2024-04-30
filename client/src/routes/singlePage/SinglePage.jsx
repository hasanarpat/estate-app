import Slider from '../../components/slider/Slider';
import Map from '../../components/map/Map';
import './singlePage.scss';
import { useLoaderData } from 'react-router-dom';
import DOMPurify from 'dompurify';

const SinglePage = () => {
  const post = useLoaderData();

  return (
    <main className='singlePage'>
      <div className='details'>
        <div className='wrapper'>
          <Slider images={post.images} />
          <div className='info'>
            <div className='top'>
              <div className='post'>
                <h1>{post.title}</h1>
                <div className='address'>
                  <img src='/pin.png' alt='' />
                  <span>{post.address}</span>
                </div>
                <div className='price'>${post.price}</div>
              </div>
              <div className='user'>
                <img src={post.user.avatar} alt='' />
                <span>{post.user.name}</span>
              </div>
            </div>
            <div
              className='bottom'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className='features'>
        <div className='wrapper'>
          <p className='title'>General</p>
          <div className='listVertical'>
            <div className='feature'>
              <img src='/utility.png' alt='' />
              <div className='featuretext'>
                <span>Utilities</span>
                {post.postDetail.utilities === 'owner' ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className='feature'>
              <img src='/pet.png' alt='' />
              <div className='featuretext'>
                <span>Pet Policy</span>
                {post.postDetailpet === 'allowed' ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets Not Allowed</p>
                )}
              </div>
            </div>
            <div className='feature'>
              <img src='/fee.png' alt='' />
              <div className='featuretext'>
                <span>Income Policy</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className='title'>Room Sizes</p>
          <div className='listHorizontal sizes'>
            <div className='size'>
              <img src='/size.png' alt='' />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className='size'>
              <img src='/bed.png' alt='' />
              <span>{post.bedroom} beds</span>
            </div>
            <div className='size'>
              <img src='/bath.png' alt='' />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>
          <p className='title'>Nearby Places</p>
          <div className='listHorizontal'>
            <div className='place'>
              <img src='/school.png' alt='' />
              <span>School</span>
              <p>{post.postDetail.school} m away</p>
            </div>
            <div className='place'>
              <img src='/bus.png' alt='' />
              <span>Bus Stop</span>
              <p>{post.postDetail.bus} m away</p>
            </div>
            <div className='place'>
              <img src='/restaurant.png' alt='' />
              <span>Restaurant</span>
              <p>{post.postDetail.restaurant} m away</p>
            </div>
          </div>
          <p className='title'>Location</p>
          <div className='mapContainer'>
            <Map items={[post]} />
          </div>
          <div className='buttons'>
            <button>
              <img src='/chat.png' alt='' />
              Send a message
            </button>
            <button>
              <img src='/save.png' alt='' />
              Save the place
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SinglePage;
