import { Link } from 'react-router-dom';

type product = {
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
  product: product;
};

function LiveItem({ product }: LiveItemProps) {
  const isLive = () => {
    return product?.liveDate && new Date(product?.liveDate) < new Date();
  };

  return (
    <div className="w-full h-36 rounded-lg shadow-md overflow-hidden" key={product.id}>
      <Link to="/" className="flex h-full">
        <div className="w-36 h-full">
          <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="h-full py-4 px-3 text-sm flex flex-col justify-between">
            <img src={product.supplier?.logo} alt={product.supplier?.name} className="w-14" />
            <p>{product.title}</p>
            <p className={`${isLive() ? 'text-red-500' : 'text-gray-500'}`}>{isLive() ? 'LIVE' : '방송종료'}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default LiveItem;
