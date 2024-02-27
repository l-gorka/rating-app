import { useState } from 'react';

import { Link } from 'react-router-dom';
import { ItemCard } from 'src/components/ui/ItemCard';

import { LoadingSpinner } from 'src/components/base/LoadingSpinner';

import FilterBar from 'src/components/ui/FilterBar';

import { InView } from 'react-intersection-observer';

import { Item } from 'api';

import { useRouteAnimation } from 'src/hooks/useRouteAnimation';

export interface CardsViewProps {
  items?: Array<Item>;
  isLoading: boolean;
}

export type SortingType = 'date' | 'rating';

export default function CardsView({items, isLoading}: CardsViewProps) {
  const [sorting, setSorting] = useState<SortingType>('date');
  const [query, setQuery] = useState('');

  const { handleLinkClick } = useRouteAnimation();

  const onSearch = (query: string) => {
    setQuery(query);
    setNumVisibleItems(6)
  }

  const onSortingChange = (name: SortingType) => {
    setSorting(name);
    setNumVisibleItems(6)
  }

  const filteredItems = items?.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));

  const sortedItems = filteredItems?.sort((a, b) => {
    if (sorting === 'date') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }

    return Number(b.rating) - Number(a.rating);
  });

  const [numVisibleItems, setNumVisibleItems] = useState<number>(6);
  const [isInitialRender, setIsInitialRender] = useState<boolean>(false);
  
  const onScrollToBottom = (isBottom: boolean) => {
    if (isInitialRender) {
      setIsInitialRender(false)

      return;
    }

    if (isBottom && numVisibleItems < (sortedItems as Item[])?.length) {
      setNumVisibleItems(numVisibleItems + 6);
    }
  }
  
  const visibleItems = sortedItems?.slice(0, numVisibleItems);

  return (
    <>
    <FilterBar sorting={sorting} onSortingChange={onSortingChange} onSearchChange={onSearch} />
      <LoadingSpinner isLoading={isLoading}>
        <div className="p-3 min-h-full grid grid-cols-2 gap-2">
          {visibleItems &&
            visibleItems.map((item) => (
              <Link key={item.id} to={`/details/${item.id}`} state={item} onClick={(e) => handleLinkClick(e, `/details/${item.id}`)}>
                <ItemCard key={item.id} {...item}  />
              </Link>
            ))}
        </div>
        <InView className='mt-28' onChange={onScrollToBottom} />
      </LoadingSpinner>
  </>
  );
}
