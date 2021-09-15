import { useEffect, useState } from 'react';
import Flicking from '@egjs/react-flicking';

type HorizontalCarouselProps = {
  children: React.ReactNode;
};

function HorizontalCarousel({ children }: HorizontalCarouselProps) {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = Math.max(window.innerWidth, document.body.offsetWidth, document.body.clientWidth) > 767;
      setIsDisabled(isMobile);
    };

    window.addEventListener('resize', handleResize);
  }, [isDisabled]);

  return (
    <Flicking autoInit={true} horizontal={true} bound={true} autoResize={true} moveType="snap">
      {children}
    </Flicking>
  );
}

export default HorizontalCarousel;
