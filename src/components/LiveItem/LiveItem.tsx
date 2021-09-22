import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export type live = {
  id: number;
  title: string;
  liveDate: string;
  thumbnail: string;
  categoryId: number;
  supplier: {
    id: number;
    name: string;
    logo: string;
  };
};

type LiveItemProps = {
  live: live;
};

function LiveItem({ live }: LiveItemProps) {
  const isLive = () => {
    return live?.liveDate && new Date(live?.liveDate) < new Date();
  };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-md h-36" key={live.id}>
      <Link to="/" className="flex h-full">
        <div className="h-full w-36">
          <LazyLoadImage effect="blur" src={live.thumbnail} alt={live.title} className="object-cover w-full h-full" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col justify-between h-full px-3 py-4 text-sm">
            <img src={live.supplier?.logo} alt={live.supplier?.name} className="w-14" />
            <p>{live.title}</p>
            <p className={`${isLive() ? 'text-red-500' : 'text-gray-500'}`}>{isLive() ? 'LIVE' : '방송종료'}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default LiveItem;
