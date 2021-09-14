import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { eventBanners, liveList } from '~/constants/mock';

import Header from '~/components/Header';
import Categries from '~/components/Categires/Categries';
import ImageCarousel from '~/components/ImageCarousel/ImageCarousel';
import Feed from '~/components/Feed';
import FilterModal from '~/components/FilterModal';

function Home() {
  const location = useLocation();
  const [, categoryId] = location.search.split('?category=');
  const [filterVisible, setFilterVisible] = useState<boolean>(false);

  const filterLiveList = !categoryId
    ? liveList
    : liveList.filter(item => (+categoryId === 0 ? item : item.categoryId === +categoryId));

  return (
    <>
      <Header />
      <ImageCarousel resources={eventBanners} />
      <Categries categoryId={+categoryId} onFilterModal={() => setFilterVisible(true)} />
      <Feed liveList={filterLiveList} />
      {filterVisible && <FilterModal visible={filterVisible} onClose={() => setFilterVisible(false)} />}
    </>
  );
}

export default Home;
