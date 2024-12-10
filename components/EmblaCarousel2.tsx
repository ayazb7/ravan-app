import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { useDotButton } from "@/components/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/EmblaCarouselArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="emblas">
      {slides.length > 0 && (
        <div
          className="embla__viewport md:w-[30vw] w-full h-[280px] md:h-[33vh]"
          ref={emblaRef}
        >
          <div className="embla__container">
            {slides.map((src, index) => (
              <div
                className="embla__slide relative w-[31vw] md:h-[32vh] h-[280px]"
                key={index}
                // Set slide dimensions here
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  layout="fill" // Makes the image fill the container
                  objectFit="cover" // Ensures the image covers the container while maintaining aspect ratio
                  quality={100} // Optional: Increase image quality if needed
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="embla__controls">
        <div className="embla__buttons absolute top-[50%] space-x-28">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
