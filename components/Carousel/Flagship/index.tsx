"use client"
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './buttons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FlagshipEventDetails } from '@/components/EventCard/Flagship'

type PropType = {
  slides: FlagshipEventDetails[]
  options?: EmblaOptionsType
}

const FlagshipCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((val, ind) => (
            <div className="embla__slide relative" key={ind}>
              <Image
                src={val.image}
                alt={val.name}
                height={200}
                width={200}
                className='w-full h-auto'
              />
              <a className="after:absolute after:inset-0" href={`/events/flagship/${val.url}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export * from './buttons'
export default FlagshipCarousel
