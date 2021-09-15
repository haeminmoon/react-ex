import { useEffect, useRef, useState } from 'react';
import { liveData } from '~/constants/mock';

import Flicking, { ReadyEvent } from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/flicking-plugins/dist/pagination.css';

import LiveItem from '~/components/Live';

function Live() {
  const [playItem, setPlayItem] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // const [startX, setStartX] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);
  const flicking = useRef<Flicking>(null);

  const playLive = liveData[playItem];
  const prevLive = playItem === 0 ? liveData[liveData.length - 1] : liveData[playItem - 1];
  const nextLive = playItem === liveData.length - 1 ? liveData[0] : liveData[playItem + 1];

  useEffect(() => {}, [playItem]);

  const onChangeLive = (e: any) => {
    if (!e.isTrusted) {
      // 사용자가 직접한 행동이 아니라면 리턴
      return;
    }
    console.log(e);
    const direction = e.direction;

    if (direction === 'NEXT') {
      if (playItem === liveData.length - 1) {
        // 마지막 라이브일 때
        setPlayItem(0);
      }
      setPlayItem(prev => prev + 1);
    } else {
      if (playItem === 0) {
        // 첫 라이브일 때
        setPlayItem(liveData.length - 1);
      }
      setPlayItem(prev => prev - 1);
    }

    flicking.current?.moveTo(1);
  };
  // const saveStartX = (e: any) => {
  //   setStartX(e.pageX || e.touches[0].pageX);
  // };

  // const endEvent = (e: any) => {
  //   const start = Math.floor(startX);
  //   const end = Math.floor(e.pageX || e.changedTouches[0].pageX);

  //   console.log('🚀 ~ endEvent ~ Math.abs(start - end)', Math.abs(start - end));
  //   if (Math.abs(start - end) < 5) {
  //     return;
  //   }

  //   if (startX > (e.pageX || e.changedTouches[0].pageX)) {
  //     if (playItem === liveData.length - 1) {
  //       // 마지막 라이브일 때
  //       return setPlayItem(0);
  //     }
  //     setPlayItem(prev => prev + 1);
  //   } else {
  //     if (playItem === 0) {
  //       // 첫 라이브일 때
  //       return setPlayItem(liveData.length - 1);
  //     }
  //     setPlayItem(prev => prev - 1);
  //   }
  // };

  // useEffect(() => {
  //   // PC
  //   ref.current?.addEventListener('mousedown', saveStartX);
  //   ref.current?.addEventListener('mouseup', endEvent);

  //   // 모바일
  //   ref.current?.addEventListener('touchstart', saveStartX);
  //   ref.current?.addEventListener('touchend', endEvent);

  //   return () => {
  //     ref.current?.removeEventListener('mousedown', saveStartX);
  //     ref.current?.removeEventListener('mouseup', endEvent);

  //     // 모바일
  //     ref.current?.removeEventListener('touchstart', saveStartX);
  //     ref.current?.removeEventListener('touchend', endEvent);
  //   };
  // }, [startX]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <div className="w-full h-full" ref={ref}>
        <Flicking className="h-full" onChanged={onChangeLive} defaultIndex={1} ref={flicking}>
          <img src={prevLive?.videoImage} className="object-cover w-full h-full" alt={prevLive?.title} />
          <div className="relative w-full h-full ">
            <LiveItem
              loading={false}
              title={playLive.title}
              videoImage={playLive.videoImage}
              videoSource={playLive.videoSource}
              mallName={playLive.mallName}
              mallLink={playLive.mallLink}
            />
          </div>
          <img src={nextLive?.videoImage} className="object-cover w-full h-full" alt={nextLive?.title} />
        </Flicking>
      </div>
    </div>
  );
}

export default Live;
