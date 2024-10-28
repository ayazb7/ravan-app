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
      <div className="embla__viewport w-[30vw] h-[30vh]" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={500}
                height={300}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>

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
