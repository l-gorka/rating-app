import { Link } from 'react-router-dom';

import { ItemList } from 'src/components/ui/ItemList';
import RouteTransition from 'src/components/transition/RouteTransition';

import { LoadingSpinner } from 'src/components/base/LoadingSpinner';
import { useSelector } from 'react-redux';
import { IRootState } from 'src/store/reducers';

import NavBar from 'src/components/ui/NavBar'

import { useRouteAnimation } from 'src/hooks/useRouteAnimation';

export default function CategoriesList() {
  const categoriesList = useSelector((state: IRootState) => state.categoriesList);
  const isLoading = useSelector((state: IRootState) => state.categoriesStatus === 'pending');

  const { handleLinkClick } = useRouteAnimation();
  
  return (
    <RouteTransition transitionKey="catList">
      <NavBar title='Categories' />
      <LoadingSpinner isLoading={isLoading}>
      <div className='flex flex-col p-3 gap-2'>
        {categoriesList &&
          categoriesList.map((item) => (
            <Link key={item.id} to={`/category/${item.id}`} onClick={(e) => handleLinkClick(e, `/category/${item.id}`)}>
              <ItemList {...item} />
            </Link>
          ))
        }
      </div>
      </LoadingSpinner>
    </RouteTransition>
  );
}
