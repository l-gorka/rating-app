import { Link } from 'react-router-dom';

import RouteTransition from '../../components/transition/RouteTransition';
import CategoryCard from './components/CategoryCard';

const items = [
  {
    id: 1,
    numberOfItems: 10,
    title: 'Some pretty long category',
    image: 'https://picsum.photos/200',
  },
  {
    id: 2,
    numberOfItems: 99,
    title: 'Category 2',
    image: 'https://picsum.photos/201',
  },
  {
    id: 3,
    numberOfItems: 21,
    title: 'Category 3',
    image: 'https://picsum.photos/203',
  },

]

export default function Categories() {
  return (
    <RouteTransition compKey="1">
      <main className='p-3 grid grid-cols-2 gap-2'>
        {
          items.map((item) => (
            <Link key={item.id} to={`/category/${item.id}`}>
              <CategoryCard key={item.id} {...item} />
            </Link>
          ))
        }
      </main>
    </RouteTransition>
  );
}
