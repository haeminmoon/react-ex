import { Link } from 'react-router-dom';
import { productList } from '~/constants/mock';

function Feed() {
  return (
    <div className="p-6 grid gap-6">
      {productList.map(product => (
        <div className="w-full h-36 rounded-lg shadow-md overflow-hidden" key={product.id}>
          <Link to="/" className="flex h-full">
            <div className="w-36 h-full">
              <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 p-3 text-sm">
              <figure>
                <img src="" alt="" />
              </figure>
              <p>{product.title}</p>
              <p>{product.liveDate.getDate()}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Feed;
