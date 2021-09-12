import { useState } from 'react';
import { liveData } from '~/constants/mock';

import LiveItem from '~/components/Live';

function Live() {
  const [palyItem, setPlayItem] = useState<number>(2);
  const playLive = liveData[palyItem];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <LiveItem
        loading={false}
        title={playLive.title}
        videoImage={playLive.videoImage}
        videoSource={playLive.videoSource}
        mallName={playLive.mallName}
        mallLink={playLive.mallLink}
      />
    </div>
  );
}

export default Live;
