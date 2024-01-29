import { Link, useParams } from 'react-router-dom';

import RouteTransition from '../../components/transition/RouteTransition';
import { ItemCard } from 'src/components/ui/ItemCard';

import BaseCollapse from 'src/components/base/BaseCollapse';

import { LoadingSpinner } from 'src/components/base/LoadingSpinner';

import { useFetch } from 'src/hooks/useFetch';

export default function Category() {
  const params = useParams();
  const { data, isLoading }: { data: any; isLoading: boolean } = useFetch(`https://soxcn79a59.execute-api.eu-central-1.amazonaws.com/get-category/${params.id}`);
  console.log(data);
  return (
    <RouteTransition compKey="1">
      <LoadingSpinner isLoading={isLoading}>
        <div className="p-3 grid grid-cols-2 gap-2">
          {data?.items &&
            data.items.map((item) => (
              <Link key={item.sk} to={`/details/${item.sk}`} state={item}>
                <ItemCard key={item.sk} {...item} showRating={true} />
                {item.id}
              </Link>
            ))}
        </div>
      </LoadingSpinner>
    </RouteTransition>
  );
}
