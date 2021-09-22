import { useEffect, useRef, useState } from 'react';
import { liveData } from '~/constants/mock';
import { Box as LoadingBox, CircularProgress } from '@material-ui/core';

import LiveItem from '~/components/Live';

function Live() {
  const [videoState, setVideoState] = useState<boolean>(true);
  const [playItem, setPlayItem] = useState<number>(0);
  const [otherItem, setOtherItem] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLImageElement>(null);
  const nextRef = useRef<HTMLImageElement>(null);
  const playLive = liveData[playItem];
  const prevLive = liveData[otherItem - 1];
  const nextLive = liveData[otherItem + 1];

  useEffect(() => {
    const REQUIRED_MOVED_X = 150;
    let startX: number = 0;

    const saveStartX = (e: any) => {
      startX = e.touches[0].pageX;
    };

    const endEvent = (e: any) => {
      const movedTouchX = Math.abs(startX - e.changedTouches[0].pageX);

      if (startX > e.changedTouches[0].pageX && movedTouchX > REQUIRED_MOVED_X && playItem !== liveData.length - 1) {
        /**
         * 드래그 방향 [ <- ]
         * 마지막 아이템 체크
         */

        // nextRef.current!.style.transform = `translateX(0)`;

        setPlayItem(prev => prev + 1);
        setVideoState(true);
      } else if (startX < e.changedTouches[0].pageX && movedTouchX > REQUIRED_MOVED_X && playItem !== 0) {
        /**
         * 드래그 방향 [ -> ]
         * 첫번째 아이템 체크
         */
        setPlayItem(prev => prev - 1);
        setVideoState(true);
      }
    };

    if (!videoState) {
      ref.current?.addEventListener('touchstart', saveStartX);
      ref.current?.addEventListener('touchend', endEvent);

      return () => {
        ref.current?.removeEventListener('touchstart', saveStartX);
        ref.current?.removeEventListener('touchend', endEvent);
      };
    }
  }, [playItem, videoState]);

  useEffect(() => {
    return () => {
      setVideoState(false);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <div className="w-full h-full" ref={ref}>
        {videoState && (
          <LoadingBox
            sx={{ display: 'flex' }}
            className="absolute top-0 left-0 z-50 items-center justify-center w-full h-full bg-black bg-opacity-50">
            <CircularProgress color="inherit" className="mb-10 text-white" />
          </LoadingBox>
        )}
        {prevLive && (
          <img
            ref={prevRef}
            src={prevLive.videoImage}
            alt="이전 방송 이미지"
            className={`
              absolute top-0 left-0 z-20 w-full h-full transform
              ${
                videoState
                  ? 'opacity-100 translate-x-0 transition-all duration-500'
                  : 'opacity-0 -translate-x-full transition-none'
              }
            `}
          />
        )}
        <LiveItem
          id={playLive.id}
          title={playLive.title}
          videoImage={playLive.videoImage}
          videoSource={playLive.videoSource}
          mallName={playLive.mallName}
          mallLink={playLive.mallLink}
          setVideoState={setVideoState}
          setOtherItem={() => setOtherItem(playItem)}
        />
        {nextLive && (
          <img
            ref={nextRef}
            src={nextLive.videoImage}
            alt="다음 방송 이미지"
            className={`
              absolute top-0 left-0 z-20 w-full h-full transform translate-x-full transition-all duration-500 opacity-0
              ${videoState ? 'live-translate-x-0 ' : 'transition-none'}
            `}
          />
        )}
      </div>
    </div>
  );
}

export default Live;
