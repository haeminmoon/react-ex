import { useEffect, useState } from 'react';
import { BagIcon, VolumeOffIcon, VolumeOnIcon } from '~/assets/icons';

import './index.scss';

type LiveProps = {
  loading: boolean;
  title: string;
  videoImage: string;
  videoSource: string;
  mallName: string;
  mallLink: string;
};

function Live(props: LiveProps) {
  const [muted, setMuted] = useState<boolean>(true);

  useEffect(() => {
    setMuted(true);
  }, [props]);

  const onMuted = () => {
    setMuted(prev => !prev);
  };

  return (
    <div className="live__item">
      <div className="item__header">
        <div className="flex items-start justify-between">
          <h1 className="w-3/4 mb-2 text-lg font-semibold text-white">{props.title}</h1>
          <button className="text-white" onClick={onMuted}>
            {muted ? <VolumeOffIcon /> : <VolumeOnIcon />}
          </button>
        </div>
        {muted && (
          <button className="px-4 py-2 text-sm text-white bg-black rounded-full bg-opacity-20" onClick={onMuted}>
            <i className="mr-2">
              <VolumeOffIcon />
            </i>
            소리를 켜려면 누르세요.
          </button>
        )}
      </div>
      <div className="item__container">
        <div
          className="preview_image"
          style={{
            backgroundImage: `url(${props.videoImage})`,
          }}></div>
        <div className="video-container">
          <video autoPlay={true} muted={muted} src={props.videoSource}></video>
        </div>
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
