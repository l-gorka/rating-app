import { useParams } from 'react-router-dom';

import RouteTransition from '../../components/transition/RouteTransition';
import CardsView from 'src/components/ui/CardsView';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { IRootState } from 'src/store/reducers';
import { Item } from 'api';

import NavBar from 'src/components/ui/NavBar'

export default function Category() {
  const params = useParams();
  const [items, setItems] = useState<Item[]>([]);
  const itemList = useSelector((state: IRootState) => state.itemsList);
  const isLoading = useSelector((state: IRootState) => state.itemsStatus === 'pending');
  
  useEffect(() => {
    const filteredItems = itemList.filter((item) => item.categoryItemsId === params.id);
    
    setItems(filteredItems as Item[]);
  }, [itemList, isLoading, params.id])
  
  const categories = useSelector((state: IRootState) => state.categoriesList);
  const [categoryName, setCategoryName] = useState<string>();

  useEffect(() => {
    const categoryName = categories.find((category) => category.id === params.id)?.name;
    setCategoryName(categoryName);
  }, [])

  return (
    <RouteTransition compKey="1">
      <NavBar title={categoryName} />
      <CardsView isLoading={isLoading} items={items} />
    </RouteTransition>
  );
}
