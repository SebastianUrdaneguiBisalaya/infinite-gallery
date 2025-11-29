export type ILoadingProps = 'lazy' | 'eager';

export type IDirectionProps = 'right' | 'left';

export interface IInfiniteGalleryImageProps {
  alt?: string;
  className?: string;
  id: string | number;
  loading?: ILoadingProps;
  srcSetDesktop?: string;
  srcSetMobile?: string;
  srcSetTablet?: string;
}

export interface IInfiniteGalleryProps {
  autoplay?: boolean;
  breakpointDesktop?: number;
  breakpointTablet?: number;
  className?: string;
  classNameTier?: string;
  classNameWrapper?: string;
  direction?: IDirectionProps[];
  height?: number;
  images?: IInfiniteGalleryImageProps[] | null;
  pauseOnHover?: boolean;
  pauseOnScroll?: boolean;
  quantityOfTiers?: number;
  velocity?: number;
}

export const InfiniteGallery: React.FC<IInfiniteGalleryProps> = ({
  autoplay = true,
  breakpointDesktop = 1024,
  breakpointTablet = 768,
  className,
  classNameTier,
  classNameWrapper,
  direction = ['right'],
  height = 200,
  images,
  pauseOnHover = true,
  pauseOnScroll = false,
  quantityOfTiers = 1,
  velocity = 10,
}) => {
  if (!images || images?.length === 0) {
    console.warn('No images data provided.');
    return null;
  }
  if (quantityOfTiers !== direction.length) {
    console.warn('The number of tiers must be equal to the number of directions.');
  }

  let batches: IInfiniteGalleryImageProps[][] = [];

  for (let i = 0; i < images.length; i+= quantityOfTiers) {
    batches.push(images.slice(i, i + quantityOfTiers));
  }

  return (
    <div className={`wrapper_gallery_container ${classNameWrapper}`}>
      {
        batches.map((batch, idx) => (
          <div
            className={`wrapper_tier ${classNameTier}`}
            key={idx}
          >
            {
              batch.map((item, idx) => (
                <div
                  className={`wrapper_image ${className}`}
                  key={idx}
                >
                  <picture>
                    <source media={`(min-width: ${breakpointDesktop}px)`} srcSet={item.srcSetDesktop} />
                    <source media={`(min-width: ${breakpointTablet}px)`} srcSet={item.srcSetTablet} />
                    <img alt={item.alt} className={`image ${item.className}`} loading={item.loading} src={item.srcSetMobile} />
                  </picture>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}
