import React, { useCallback, useEffect, useRef } from 'react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from '../ui/EmblaCarouselArrowButtons';
import MainButton from './MainButton';
import { FiExternalLink } from "react-icons/fi";

type SlideType = {
  image: string;
  title: string;
  description: string;
  link?: boolean;
  linkk?: string;
  code?: boolean;
  codee?: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;  
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__image') as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = 0.52 * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = Math.min(Math.max(tweenValue, 0), 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  const updateActiveSlide = useCallback(() => {
    if (!emblaApi) return;

    const slides = emblaApi.slideNodes();
    const activeIndex = emblaApi.selectedScrollSnap();

    slides.forEach((slide, index) => {
      if (index === activeIndex) {
        slide.classList.add('embla__slide--active');
      } else {
        slide.classList.remove('embla__slide--active');
      }
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);
    updateActiveSlide();

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('reInit', updateActiveSlide)
      .on('scroll', tweenScale)
      .on('select', updateActiveSlide)
      .on('slideFocus', tweenScale);
  }, [emblaApi, tweenScale, updateActiveSlide]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="embla__slide__image"
              />
              <div className='flex flex-col items-center mt-3 text-white' >
                <p className="embla__slide__text font-semibold text-lg">{slide.title}</p>
                <p className="embla__slide__text text-center">{slide.description}</p>
              </div>
              <div className='flex gap-x-3 justify-center mt-5'>
                {slide.link && <MainButton variant={'primary'}><a href={slide.linkk}><div className='flex gap-x-1'><div>Link</div> <div className='flex items-center justify-center h-full'><FiExternalLink color='white'/></div></div></a></MainButton>}
                {slide.code && <MainButton variant={'secondary'}><a href={slide.codee}><div className='flex gap-x-1'><div>GitHub</div></div></a></MainButton>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center'>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default EmblaCarousel;