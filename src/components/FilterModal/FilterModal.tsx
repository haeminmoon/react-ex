import React from 'react';
import RootPortal from '../RootPortal';
import ModalBackground from '../Modal/ModalBackground';

import { CloseIcon } from '~/assets/icons';
import './index.scss';

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
};

function FilterModal({ visible, onClose }: FilterModalProps) {
  const stopPropagation = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <RootPortal>
      <ModalBackground visible={visible} onClose={onClose}>
        <div
          className={`modal-box absolute bottom-0 w-full bg-white rounded-tr-3xl rounded-tl-3xl ${
            visible && 'visible'
          }`}
          onClick={stopPropagation}
        >
          <div className="modal-header p-3 flex border-b border-gray-200">
            <p className="flex-1 font-semibold text-center text-lg">필터</p>
            <button onClick={onClose}>
              <CloseIcon className="text-gray-500" />
            </button>
          </div>
          <div className="modal-container py-4 px-6 overflow-auto overflow-y-scroll">
            <ul>
              <li className="p-2">플랫폼 전체 선택</li>
              <li className="p-2">네이버 쇼핑라이브</li>
              <li className="p-2">인터파크TV</li>
              <li className="p-2">카카오 쇼핑라이브</li>
              <li className="p-2">CJ온스타일 라이브</li>
              <li className="p-2">Hmall 라이브</li>
              <li className="p-2">Live 11</li>
              <li className="p-2">VOGO 라이브쇼핑</li>
            </ul>
          </div>
          <div className="modal-bottom bg-white grid grid-cols-2 gap-4 py-4 px-8">
            <button className="filter-button">초기화</button>
            <button className="filter-button bg-black text-white">적용하기</button>
          </div>
        </div>
      </ModalBackground>
    </RootPortal>
  );
}

export default FilterModal;
