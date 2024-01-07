import { Link } from 'react-router-dom';

import { ItemList } from 'src/components/ui/ItemList';
import RouteTransition from 'src/components/transition/RouteTransition';

import { LoadingSpinner } from 'src/components/base/LoadingSpinner';

import { useFetch } from 'src/hooks/useFetch';

import { CategoryOverview } from 'src/types';
import { Divider } from '@nextui-org/react';
import { useSelector } from 'react-redux';

export default function CategoriesList() {
  const categoriesList = useSelector((state) => state.categoriesList);
  const isLoading = useSelector((state) => state.statues === 'pending');
  console.log(categoriesList);
  
  return (
    <RouteTransition compKey="1">
      <div className='p-4'>
        <h1 className='text-xl'>Categories</h1>
      </div>
      <Divider />
      <LoadingSpinner isLoading={isLoading}>
      <div className='flex flex-col p-3 gap-2'>
        {categoriesList &&
          categoriesList.map((item) => (
            <Link key={item.id} to={`/category/${item.id}`}>
              <ItemList />
            </Link>
          ))
        }
      </div>
      </LoadingSpinner>
    </RouteTransition>
  );
}
