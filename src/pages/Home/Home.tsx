import RouteTransition from '../../components/transition/RouteTransition';
import CardsView from 'src/components/ui/CardsView';
import { listItems } from 'src/graphql/queries';

import { useFetch } from 'src/hooks/useFetch';

export default function Home() {
  const { data, isLoading } = useFetch(listItems);

  return (
    <RouteTransition compKey="1">
      <CardsView isLoading={isLoading} items={data?.listItems?.items} />
    </RouteTransition>
  );
}
