import { Link } from 'react-router-dom';

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
    <div className="w-full h-36 rounded-lg shadow-md overflow-hidden" key={live.id}>
      <Link to="/" className="flex h-full">
        <div className="w-36 h-full">
          <img src={live.thumbnail} alt={live.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="h-full py-4 px-3 text-sm flex flex-col justify-between">
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
