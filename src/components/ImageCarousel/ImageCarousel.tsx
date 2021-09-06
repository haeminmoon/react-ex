import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { Pagination, AutoPlay } from '@egjs/flicking-plugins';

import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/flicking-plugins/dist/pagination.css';
import './index.scss';

type Resource = {
  src: string;
  link?: string;
};

type ImageCarouselProps = {
  resources?: Resource[];
  children?: React.ReactChild;
};

function ImageCarousel({ resources, children }: ImageCarouselProps) {
  const _plugins = [
    new Pagination({ type: 'bullet' }),
    new AutoPlay({ duration: 3000, direction: 'NEXT', stopOnHover: true }),
  ];

  return (
    <Flicking circular={true} plugins={_plugins}>
      {children}
      <div className="w-full h-52 bg-red-200">1</div>
      <div className="w-full h-52 bg-blue-200">2</div>
      <div className="w-full h-52 bg-green-200">3</div>
      <ViewportSlot>
        <div className="flicking-pagination"></div>
      </ViewportSlot>
    </Flicking>
  );
}

export default ImageCarousel;
