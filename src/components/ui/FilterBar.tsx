import { Input, Button, ButtonGroup } from '@nextui-org/react';
import { FaCalendar, FaSearch, FaStar } from 'react-icons/fa';

import { SortingType } from './CardsView';

interface FilterBarProps {
  sorting: 'date' | 'rating';
  onSortingChange: (name: SortingType) => void;
  onSearchChange: (query: string) => void;
}

export default function FilterBar({ sorting, onSortingChange, onSearchChange }: FilterBarProps) {
  const seachIcon = <div className='p-2'><FaSearch size={20} /></div>;
  const getColor = (name: SortingType) => {
    if (name === sorting) {
      return 'warning';
    }

    return undefined;
  };
  return (
    <div className="flex gap-2 px-3 py-2">
      <Input size="sm" placeholder="Search" variant="bordered" startContent={seachIcon} onInput={(e) => onSearchChange((e.target as HTMLInputElement).value)} />
      <ButtonGroup>
        <Button isIconOnly className="h-12 w-14" variant="bordered" radius="sm" color={getColor('date')} onClick={() => onSortingChange('date')}>
          <FaCalendar size={20} />
        </Button>
        <Button isIconOnly className="h-12 w-14" variant="bordered" radius="sm" color={getColor('rating')} onClick={() => onSortingChange('rating')}>
          <FaStar size={20} />
        </Button>
      </ButtonGroup>
    </div>
  );
}
