export type THtmlElementGetter = () => NodeListOf<Element>
export type TContainer =
  | HTMLElement
  | NodeListOf<Element>
  | string
  | THtmlElementGetter
  | undefined
export type TSlides =
  | HTMLElement
  | NodeListOf<Element>
  | string
  | THtmlElementGetter
  | number
  | undefined

export type TDetails = {
  direction: 1 | 0 | -1
  progressTrack: number
  progressSlides: number
  position: number
  positions: {
    distance: number
    portion: number
  }[]
  speed: number
  relativeSlide: number
  absoluteSlide: number
  size: number
  widthOrHeight: number
}

export type TOptions = {
  autoHeight?: boolean
  breakpoints?: {
    [key: string]: Omit<TOptionsEvents, 'breakpoints'>
  }
  centered?: boolean
  controls?: boolean
  dragSpeed?: number
  duration?: number
  friction?: number
  initial?: number
  loop?: boolean
  mode?: 'snap' | 'free' | 'free-snap'
  resetSlide?: boolean
  rubberband?: boolean
  slides?: TSlides
  slidesPerView?: number
  spacing?: number
  vertical?: boolean
  inlineBlockMode?: boolean
}

export type TEvents = {
  afterChange?: (instance: KeenSlider) => void
  beforeChange?: (instance: KeenSlider) => void
  created?: (instance: KeenSlider) => void
  dragEnd?: (instance: KeenSlider) => void
  dragStart?: (instance: KeenSlider) => void
  destroyed?: (instance: KeenSlider) => void
  mounted?: (instance: KeenSlider) => void
  move?: (instance: KeenSlider) => void
  slideChanged?: (instance: KeenSlider) => void
}

export type TOptionsEvents = TOptions & TEvents

export default class KeenSlider {
  constructor(container: TContainer, options?: TOptionsEvents)
  controls: (active: boolean) => void
  next: () => void
  prev: () => void
  destroy: () => void
  refresh: (options?: TOptionsEvents) => void
  moveToSlideRelative: (
    slide: number,
    nearest?: boolean,
    duration?: number
  ) => void
  moveToSlide: (slide: number, duration?: number) => void
  resize: () => void
  details: () => TDetails
}
