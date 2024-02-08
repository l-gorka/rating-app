import { Link } from 'react-router-dom';
import { ItemCard } from 'src/components/ui/ItemCard';

import { LoadingSpinner } from 'src/components/base/LoadingSpinner';

import { Item } from 'api';

export interface CardsViewProps {
  items: Array<Item>;
  isLoading: boolean;
}

export default function Category({items, isLoading}: CardsViewProps) {
  return (
      <LoadingSpinner isLoading={isLoading}>
        <div className="p-3 grid grid-cols-2 gap-2">
          {items &&
            items.map((item) => (
              <Link key={item.id} to={`/details/${item.id}`} state={item}>
                <ItemCard key={item.id} {...item}  />
              </Link>
            ))}
        </div>
      </LoadingSpinner>
  );
}
