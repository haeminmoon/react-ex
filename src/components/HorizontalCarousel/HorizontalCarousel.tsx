import Flicking from '@egjs/react-flicking';

type HorizontalCarouselProps = {
  children: React.ReactNode;
};

function HorizontalCarousel({ children }: HorizontalCarouselProps) {
  return (
    <Flicking bound={true} horizontal={true} autoResize={true} moveType="snap">
      {children}
    </Flicking>
  );
}

export default HorizontalCarousel;
