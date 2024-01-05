import { Link } from 'react-router-dom';

import {ItemCard} from 'src/components/ui/ItemCard';
import RouteTransition from 'src/components/transition/RouteTransition';

import { LoadingSpinner } from 'src/components/base/LoadingSpinner';

import { useFetch } from 'src/hooks/useFetch';

import { CategoryOverview } from 'src/types';


export default function CategoriesList() {
  
 const { data: categoriesList, isLoading }: {data: CategoryOverview[], isLoading: boolean} = useFetch('/categories');

  return (
    <RouteTransition compKey="1">
      <LoadingSpinner isLoading={isLoading}>
      <div className='p-3 grid grid-cols-2 gap-2'>
        {categoriesList &&
          categoriesList.map((item) => (
            <Link key={item.id} to={`/category/${item.id}`}>
              <ItemCard key={item.id} {...item} />
            </Link>
          ))
        }
      </div>
      </LoadingSpinner>
    </RouteTransition>
  );
}
