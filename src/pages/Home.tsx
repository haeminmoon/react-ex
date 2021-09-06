import Categries from '~/components/Categries';
import ImageCarousel from '~/components/ImageCarousel/ImageCarousel';
import Feed from '~/components/Feed';

import { eventBanners } from '~/constants/mock';

function Home() {
  return (
    <>
      <ImageCarousel resources={eventBanners} />
      <Categries />
      <Feed />
    </>
  );
}

export default Home;
