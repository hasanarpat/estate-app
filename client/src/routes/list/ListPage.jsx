import './listPage.scss';
import { listData } from '../../lib/dummy';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';

const ListPage = () => {
  const data = listData;

  return (
    <main className='listPage'>
      <div className='listContainer'>
        <div className='wrapper'>
          <Filter />
          {data.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className='mapContainer'>
        <Map items={data} />
      </div>
    </main>
  );
};

export default ListPage;
