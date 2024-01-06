import { Link, useParams } from 'react-router-dom';


import RouteTransition from '../../components/transition/RouteTransition';
import {ItemCard} from 'src/components/ui/ItemCard';

import { LoadingSpinner } from 'src/components/base/LoadingSpinner';

import { useFetch } from 'src/hooks/useFetch';

export default function Category() {
  const params = useParams();
  console.log(params);
  const { data, isLoading }: {data: any, isLoading: boolean} = useFetch(`/category/${params.id}`);

  return (
    <RouteTransition compKey="1">
      <LoadingSpinner isLoading={isLoading}>
      <div className='p-3 grid grid-cols-2 gap-2'>
        {data?.items &&
          data.items.map((item) => (
            <Link key={item.id} to={`/details/${item.id}`} state={item}>
              <ItemCard key={item.id} {...item} showRating={true}  />
            </Link>
          ))
        }
      </div>
      </LoadingSpinner>
    </RouteTransition>
  );
}