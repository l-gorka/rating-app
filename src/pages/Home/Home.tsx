import RouteTransition from '../../components/transition/RouteTransition';
import CardsView from 'src/components/ui/CardsView';

import { useSelector } from 'react-redux';
import { IRootState } from 'src/store/reducers';

import NavBar from 'src/components/ui/NavBar';

export default function Home() {
  const itemList = useSelector((state: IRootState) => state.itemsList);
  const isLoading = useSelector((state: IRootState) => state.itemsStatus === 'pending');
  console.log(itemList);

  return (
    <RouteTransition compKey="1">
      <NavBar title="Recents" />
      <CardsView isLoading={isLoading} items={itemList} />
    </RouteTransition>
  );
}
