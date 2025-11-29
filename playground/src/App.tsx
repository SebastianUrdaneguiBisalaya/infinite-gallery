import { InfiniteGallery } from '../../src'

const data = [
  {
    alt: 'Image 1',
    id: 1,
    loading: 'lazy',
    srcSetDesktop: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetMobile: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetTablet: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg'
  },
  {
    alt: 'Image 2',
    id: 2,
    loading: 'lazy',
    srcSetDesktop: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetMobile: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetTablet: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg'
  },
  {
    alt: 'Image 3',
    id: 3,
    loading: 'lazy',
    srcSetDesktop: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetMobile: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetTablet: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg'
  },
  {
    alt: 'Image 1',
    id: 4,
    loading: 'lazy',
    srcSetDesktop: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetMobile: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetTablet: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg'
  },
  {
    alt: 'Image 1',
    id: 5,
    loading: 'lazy',
    srcSetDesktop: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetMobile: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetTablet: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg'
  },
  {
    alt: 'Image 1',
    id: 6,
    loading: 'lazy',
    srcSetDesktop: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetMobile: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetTablet: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg'
  },
  {
    alt: 'Image 1',
    id: 7,
    loading: 'lazy',
    srcSetDesktop: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetMobile: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetTablet: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg'
  },
  {
    alt: 'Image 1',
    id: 8,
    loading: 'lazy',
    srcSetDesktop: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetMobile: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetTablet: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg'
  },
  {
    alt: 'Image 1',
    id: 9,
    loading: 'lazy',
    srcSetDesktop: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetMobile: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetTablet: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg'
  },
  {
    alt: 'Image 1',
    id: 10,
    loading: 'lazy',
    srcSetDesktop: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetMobile: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    srcSetTablet: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg'
  },
]

export function App() {
  return (
    <div className=''>
      <h1>Infinite Gallery</h1>
s      <InfiniteGallery />
    </div>
  )
}
