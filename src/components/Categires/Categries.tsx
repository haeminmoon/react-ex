import { Link } from 'react-router-dom';
import { ChannelIcon } from '~/assets/icons';
import { categories } from '~/constants/mock';

import HorizontalCarousel from '../HorizontalCarousel';

type CategriesProps = {
  categoryId: number;
  onFilterModal: () => void;
};

function Categries({ categoryId, onFilterModal }: CategriesProps) {
  return (
    <div className="flex min-w-full pl-2 bg-white border-b border-gray-200">
      <HorizontalCarousel>
        {categories.map(category => (
          <Link
            to={`/home?category=${category.id}`}
            key={category.category}
            className={`p-4 ${category.id === (categoryId ?? 1) ? 'text-red-500 font-semibold' : 'text-black'}`}>
            {category.text}
          </Link>
        ))}
      </HorizontalCarousel>
      <button className="w-32 text-sm align-middle shadow-left" onClick={onFilterModal}>
        <ChannelIcon fontSize="small" />
        <span>채널</span>
      </button>
    </div>
  );
}

export default Categries;
