import 'leaflet/dist/leaflet.css';
import './map.scss';
import { MapContainer, TileLayer } from 'react-leaflet';
import Pin from '../pin/Pin';

const Map = ({ items }) => {
  return (
    <MapContainer
      className='map'
      center={[51.505, -0.09]}
      zoom={7}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
