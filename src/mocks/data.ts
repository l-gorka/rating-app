import { Category } from 'src/types'

export const categoriesList: Category[] = [
  {
    id: 1,
    title: 'Movies',
    image: 'https://picsum.photos/200/',
    items: [
      {
        id: 1,
        title: 'Star Wars',
        image: 'https://picsum.photos/200/',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam.'
      },
      {
        id: 2,
        title: 'Star Wars 2',
        image: 'https://picsum.photos/201/',
        rating: 4,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam.'
      },
      {
        id: 3,
        title: 'Star Wars 3',
        image: 'https://picsum.photos/202/',
        rating: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam.'
      },
    ]
  },
  {
    id: 2,
    title: 'TV Shows',
    image: 'https://picsum.photos/205/',
    items: [
      {
        id: 1,
        title: 'Star Wars',
        image: 'https://picsum.photos/206/',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam.'
      },
      {
        id: 2,
        title: 'Star Wars 2',
        image: 'https://picsum.photos/207/',
        rating: 4,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam.'
      },
      {
        id: 3,
        title: 'Star Wars 3',
        image: 'https://picsum.photos/208/',
        rating: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam.'
      },
    ]
  },
]