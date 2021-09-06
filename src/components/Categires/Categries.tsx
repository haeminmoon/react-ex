import { Link, useLocation } from 'react-router-dom';
import { categories } from '~/constants/mock';

import HorizontalCarousel from '../HorizontalCarousel';

function Categries() {
  const location = useLocation();
  const [, categoryId] = location.search.split('?category=');

  return (
    <div className="w-full px-2 border-b border-gray-200">
      <HorizontalCarousel>
        {categories.map(category => (
          <Link
            to={`/home?category=${category.id}`}
            key={category.category}
            className={`p-4 ${category.id === (+categoryId || 1) ? 'text-red-500 font-semibold' : 'text-black'}`}
          >
            {category.text}
          </Link>
        ))}
      </HorizontalCarousel>
    </div>
  );
}

export default Categries;
