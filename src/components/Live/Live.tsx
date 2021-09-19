import { useEffect, useRef, useState } from 'react';
import { BagIcon, VolumeOffIcon, VolumeOnIcon } from '~/assets/icons';

import './index.scss';

type LiveProps = {
  id: number;
  title: string;
  videoImage: string;
  videoSource: string;
  mallName: string;
  mallLink: string;
  setVideoState: any;
};

function Live(props: LiveProps) {
  const videoDelayTime: number = 2000;
  const video = useRef<HTMLVideoElement>(null);

  const [muted, setMuted] = useState<boolean>(true);

  useEffect(() => {
    /**
     * 음소거
     */
    setMuted(true);

    /**
     * 비디오 딜레이 설정
     */
    if (video.current?.paused) {
      const videoDelay = setTimeout(() => {
        video.current?.play();
        props.setVideoState(video.current?.paused);
        clearTimeout(videoDelay);
      }, videoDelayTime);
    }
  }, [props]);

  const onOffMuted = () => {
    setMuted(false);
  };

  const onToggleMeted = () => {
    setMuted(prev => !prev);
  };

  return (
    <div className="live__item">
      <div className="item__header">
        <div className="flex items-start justify-between">
          <h1 className="w-3/4 mb-2 text-lg font-semibold text-white">{props.title}</h1>
          <button className="text-white" onClick={onToggleMeted}>
            {muted ? <VolumeOffIcon /> : <VolumeOnIcon />}
          </button>
        </div>
        {muted && (
          <button className="px-4 py-2 text-sm text-white bg-black rounded-full bg-opacity-20" onClick={onOffMuted}>
            <i className="mr-2">
              <VolumeOffIcon />
            </i>
            소리를 켜려면 누르세요.
          </button>
        )}
      </div>
      <div className="item__container">
        <img
          className={`video_preview ${
            !video.current ? 'opacity-100' : video.current?.paused ? 'opacity-100' : 'opacity-0'
          }`}
          src={props.videoImage}
          alt={props.title}
        />
        <video id={`video_${props.id}`} muted={muted} src={props.videoSource} ref={video} />
      </div>
      <div className="item__bottom">
        <button className="flex-1 px-4 py-2 font-semibold text-white bg-red-600 rounded-md shadow-md">
          {props.mallName}으로 이동하기
        </button>
        <button className="w-10 text-red-600 align-middle bg-white rounded-full">
          <BagIcon />
        </button>
      </div>
    </div>
  );
}

export default Live;
