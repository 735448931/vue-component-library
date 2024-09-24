export interface CarouselProps {
    height?: string
    tigger?: "hover" | "click"
    autoplay?: boolean
    interval?: number
    arrow?: 'always' | 'never' | 'hover'
    srcArray: string[]
}