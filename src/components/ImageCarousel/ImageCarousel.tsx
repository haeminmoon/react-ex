import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { Pagination, AutoPlay } from '@egjs/flicking-plugins';

import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/flicking-plugins/dist/pagination.css';
import './index.scss';
import { useEffect, useRef } from 'react';

type Resource = {
  src: string;
  link?: string;
  event?: string;
};

type ImageCarouselProps = {
  resources?: Resource[];
};

function ImageCarousel({ resources }: ImageCarouselProps) {
  const ref = useRef<Flicking | null>(null);

  useEffect(() => {
    ref.current?.addPlugins(
      new Pagination({ type: 'bullet' }),
      new AutoPlay({ duration: 3000, direction: 'NEXT', stopOnHover: true })
    );
    return () => {
      ref.current = null;
    };
  }, []);

  return (
    <Flicking circular autoResize preventClickOnDrag moveType="snap" ref={ref}>
      {resources?.map((resource, index) => (
        <div className="w-full bg-gray-100 h-52" key={`${resource.event}-${index}`}>
          <a href={resource.link} key={resource.link} className="block w-full h-full">
            <img src={resource.src} alt="이벤트 배너" className="object-cover w-full h-full" />
          </a>
        </div>
      ))}
      <ViewportSlot>
        <div className="flicking-pagination"></div>
      </ViewportSlot>
    </Flicking>
  );
}

export default ImageCarousel;
