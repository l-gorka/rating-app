import { Link } from 'react-router-dom';

import RouteTransition from '../../components/transition/RouteTransition';
import CategoryCard from './components/CategoryCard';

const items = [
  {
    id: 1,
    title: 'Category 1',
    image: 'https://picsum.photos/200',
  },
  {
    id: 1,
    title: 'Category 2',
    image: 'https://picsum.photos/201',
  },
  {
    id: 1,
    title: 'Category 3',
    image: 'https://picsum.photos/203',
  },

]

export default function Categories() {
  return (
    <RouteTransition compKey="1">
      <main className='p-4 grid grid-cols-2'>
        {
          items.map((item) => (
            <Link to={`/category/${item.id}`}>
              <CategoryCard key={item.id} {...item} />
            </Link>
          ))
        }
      </main>
    </RouteTransition>
  );
}
