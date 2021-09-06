import { Link, useLocation } from 'react-router-dom';
import { ChannelIcon } from '~/assets/icons';
import { categories } from '~/constants/mock';
import HorizontalCarousel from '../HorizontalCarousel';

type CategriesProps = {
  onFilterModal: () => void;
};

function Categries({ onFilterModal }: CategriesProps) {
  const location = useLocation();
  const [, categoryId] = location.search.split('?category=');

  return (
    <div className="w-full pl-2 border-b border-gray-200 flex">
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
      <button className="w-32 align-middle text-sm shadow-left" onClick={onFilterModal}>
        <ChannelIcon fontSize="small" />
        <span>채널</span>
      </button>
    </div>
  );
}

export default Categries;
