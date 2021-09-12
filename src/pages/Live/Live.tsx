import { useEffect, useRef, useState } from 'react';
import { liveData } from '~/constants/mock';

import LiveItem from '~/components/Live';

function Live() {
  const [palyItem, setPlayItem] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);
  const playLive = liveData[palyItem];
  const prevLive = palyItem === 0 ? liveData[liveData.length - 1] : liveData[palyItem - 1];
  const nextLive = palyItem === liveData.length - 1 ? liveData[0] : liveData[palyItem + 1];

  const saveStartX = (e: any) => {
    setStartX(e.pageX || e.touches[0].pageX);
  };

  const endEvent = (e: any) => {
    if (startX > (e.pageX || e.changedTouches[0].pageX)) {
      if (palyItem === liveData.length - 1) {
        // 마지막 라이브일 때
        return setPlayItem(0);
      }
      setPlayItem(prev => prev + 1);
    } else {
      if (palyItem === 0) {
        // 첫 라이브일 때
        return setPlayItem(liveData.length - 1);
      }
      setPlayItem(prev => prev - 1);
    }
  };

  useEffect(() => {
    // PC
    ref.current?.addEventListener('mousedown', saveStartX);
    ref.current?.addEventListener('mouseup', endEvent);

    // 모바일
    ref.current?.addEventListener('touchstart', saveStartX);
    ref.current?.addEventListener('touchend', endEvent);

    return () => {
      ref.current?.removeEventListener('mousedown', saveStartX);
      ref.current?.removeEventListener('mouseup', endEvent);

      // 모바일
      ref.current?.removeEventListener('touchstart', saveStartX);
      ref.current?.removeEventListener('touchend', endEvent);
    };
  }, [startX]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <div className="w-full h-full flicking-container" ref={ref}>
        {/* <img src={prevLive?.videoImage} alt={prevLive?.title} className="w-full h-full" /> */}
        <LiveItem
          loading={false}
          title={playLive.title}
          videoImage={playLive.videoImage}
          videoSource={playLive.videoSource}
          mallName={playLive.mallName}
          mallLink={playLive.mallLink}
        />
        {/* <img src={nextLive?.videoImage} alt={nextLive?.title} className="w-full h-full" /> */}
      </div>
    </div>
  );
}

export default Live;
