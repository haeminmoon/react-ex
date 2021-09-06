import { useState } from 'react';
import { eventBanners } from '~/constants/mock';

import Categries from '~/components/Categires/Categries';
import ImageCarousel from '~/components/ImageCarousel/ImageCarousel';
import Feed from '~/components/Feed';
import FilterModal from '~/components/FilterModal';

function Home() {
  const [filterVisible, setFilterVisible] = useState<boolean>(false);

  return (
    <>
      <ImageCarousel resources={eventBanners} />
      <Categries onFilterModal={() => setFilterVisible(true)} />
      <Feed />
      <FilterModal visible={filterVisible} onClose={() => setFilterVisible(false)} />
    </>
  );
}

export default Home;
