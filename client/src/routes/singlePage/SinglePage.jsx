import Slider from '../../components/slider/Slider';
import Map from '../../components/map/Map';
import { singlePostData, userData } from '../../lib/dummy';
import './singlePage.scss';

const SinglePage = () => {
  const data = singlePostData;

  return (
    <main className='singlePage'>
      <div className='details'>
        <div className='wrapper'>
          <Slider images={data.images} />
          <div className='info'>
            <div className='top'>
              <div className='post'>
                <h1>{data.title}</h1>
                <div className='address'>
                  <img src='/pin.png' alt='' />
                  <span>{data.address}</span>
                </div>
                <div className='price'>${data.price}</div>
              </div>
              <div className='user'>
                <img src={userData.img} alt='' />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className='bottom'>{singlePostData.description}</div>
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
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/pet.png' alt='' />
              <div className='featuretext'>
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/fee.png' alt='' />
              <div className='featuretext'>
                <span>Property fees</span>
                <p>Must have 3x the rent in totatl household income</p>
              </div>
            </div>
          </div>
          <p className='title'>Room Sizes</p>
          <div className='listHorizontal'>
            <div className='size'>
              <img src='/size.png' alt='' />
              <span>80sqft</span>
            </div>
            <div className='size'>
              <img src='/bed.png' alt='' />
              <span>2 beds</span>
            </div>
            <div className='size'>
              <img src='/bath.png' alt='' />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className='title'>Nearby Places</p>
          <div className='listHorizontal'>
            <div className='place'>
              <img src='/school.png' alt='' />
              <span>School</span>
            </div>
            <div className='place'>
              <img src='/bus.png' alt='' />
              <span>Bus Stop</span>
            </div>
            <div className='place'>
              <img src='/restaurant.png' alt='' />
              <span>Restaurant</span>
            </div>
          </div>
          <p className='title'>Location</p>
          <div className='mapContainer'>
            <Map items={[singlePostData]} />
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
