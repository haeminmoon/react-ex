import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { eventBanners } from '~/constants/mock';

import Header from '~/components/Header';
import Categries from '~/components/Categires/Categries';
import ImageCarousel from '~/components/ImageCarousel/ImageCarousel';
import Feed from '~/components/Feed';
import FilterModal from '~/components/FilterModal';

function Home() {
  const location = useLocation();
  const [, categoryId] = location.search.split('?category=');
  const [filterVisible, setFilterVisible] = useState<boolean>(false);

  return (
    <>
      <Header />
      <div className="sticky left-0 z-50 top-16">
        <ImageCarousel resources={eventBanners} />
        <Categries categoryId={+categoryId} onFilterModal={() => setFilterVisible(true)} />
      </div>
      <Feed categoryId={+categoryId} />
      {filterVisible && <FilterModal visible={filterVisible} onClose={() => setFilterVisible(false)} />}
    </>
  );
}

export default Home;
