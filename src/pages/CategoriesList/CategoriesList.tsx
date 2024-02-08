import { Link } from 'react-router-dom';

import { ItemList } from 'src/components/ui/ItemList';
import RouteTransition from 'src/components/transition/RouteTransition';

import { LoadingSpinner } from 'src/components/base/LoadingSpinner';
import PageTitle from 'src/components/base/PageTitle';
import { Divider } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { IRootState } from 'src/store/reducers';

export default function CategoriesList() {
  const categoriesList = useSelector((state: IRootState) => state.categoriesList);
  const isLoading = useSelector((state: IRootState) => state.categoriesStatus === 'pending');
  
  return (
    <RouteTransition compKey="1">
      <PageTitle>Categories</PageTitle>
      <Divider />
      <LoadingSpinner isLoading={isLoading}>
      <div className='flex flex-col p-3 gap-2'>
        {categoriesList &&
          categoriesList.map((item) => (
            <Link key={item.id} to={`/category/${item.id}`}>
              <ItemList {...item} />
            </Link>
          ))
        }
      </div>
      </LoadingSpinner>
    </RouteTransition>
  );
}
