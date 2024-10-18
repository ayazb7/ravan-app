// 

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import AutoScroll from 'embla-carousel-auto-scroll'; // Import AutoScroll plugin

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  // Initialize Embla with AutoScroll plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, ...options },
    [
      AutoScroll({
        speed: 1,             // Slow down the scroll speed (lower is slower)
        startDelay: 2000,     // Delay before auto-scrolling starts (in milliseconds)
        stopOnInteraction: false, // Keep auto-scrolling even after user interaction
        stopOnMouseEnter: false,  // Continue scrolling even if the mouse hovers over the carousel
      })
    ]
  );

  return (
    <section className="embla w-full overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div className="embla__slide flex-shrink-0 w-full max-w-xs mx-2" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;