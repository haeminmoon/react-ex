import Flicking from '@egjs/react-flicking';

type HorizontalCarouselProps = {
  children: React.ReactNode;
};

function HorizontalCarousel({ children }: HorizontalCarouselProps) {
  return (
    <Flicking autoInit autoResize horizontal bound moveType="snap">
      {children}
    </Flicking>
  );
}

export default HorizontalCarousel;
