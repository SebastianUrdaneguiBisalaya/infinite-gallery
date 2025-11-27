export interface IInfiniteGalleryImageProps {
  alt?: string;
  id: string | number;
  loading?: 'lazy' | 'eager';
  srcSetDesktop?: string;
  srcSetMobile?: string;
  srcSetTablet?: string;
}

export interface IInfiniteGalleryProps {
  autoplay?: boolean;
  breakPoints?: [number, number, number] | null;
  className?: string;
  direction?: 'right' | 'left';
  height?: number;
  images?: IInfiniteGalleryImageProps[][] | null;
  pauseOnHover?: boolean;
  pauseOnScroll?: boolean;
  spaceBetween?: number;
  velocity?: number;
  wrapperClassName?: string;
}

export const InfiniteGallery: React.FC<IInfiniteGalleryProps> = ({
  direction = 'right',
  height = 200,
  images,
  pauseOnHover = true,
  pauseOnScroll = false,
  velocity = 10
}) => {
  // Evaluate if the images data are null or empty
  if (!images || images?.length === 0 || !images?.[0] || images?.[0]?.length === 0) {
    console.warn('No images data provided.');
    return null;
  }
  return (
    <div>

    </div>
  )
}
