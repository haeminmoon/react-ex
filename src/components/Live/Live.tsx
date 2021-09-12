import { BagIcon, VolumeOffIcon } from '~/assets/icons';
import './index.scss';

function Live() {
  return (
    <div className="live__item">
      <div className="item__header">
        <div className="flex items-start justify-between">
          <h1 className="w-3/4 mb-2 text-lg font-semibold text-white">
            [한가위 풍성한할인 대잔치] 프리미엄 표고버섯 선물세트
          </h1>
          <button className="text-white">
            <VolumeOffIcon />
          </button>
        </div>
        <button className="px-4 py-2 text-sm text-white bg-black rounded-full bg-opacity-20">
          <i className="mr-2">
            <VolumeOffIcon />
          </i>
          소리를 켜려면 누르세요.
        </button>
      </div>
      <div className="item__container">
        <div
          className="preview_image"
          style={{
            backgroundImage: `url(
              https://g-selected.pstatic.net/MjAyMTA5MTBfMjM2/MDAxNjMxMjUxNjM1MjIw.N4dZba6HLShqzZM7JHH44GQUsLLtAt47K1saJrPJFYsg.hTiSXU2dbrFbVKNvTMkJLO9BNyzl0m-2uY5LTtSTp1Ig.JPEG/31761687552168142_615555975.jpg?type=f720_1280_q80
            )`,
          }}></div>
      </div>
      <div className="item__bottom">
        <button className="flex-1 px-4 py-2 font-semibold text-white bg-red-600 rounded-md shadow-md">
          {'마켓'}으로 이동하기
        </button>
        <button className="w-10 text-red-600 align-middle bg-white rounded-full">
          <BagIcon />
        </button>
      </div>
    </div>
  );
}

export default Live;
