import { Button, ButtonGroup } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { FunctionComponent } from 'react';

interface BottomNavItem {
  component: FunctionComponent<{
    size: number;
    color: string;
  }>;
  href: string;
}

export default function BottomNav({ options }: { options: BottomNavItem[] }) {
  const path = window.location.pathname;

  return (
    <ButtonGroup className="flex z-10 w-full h-16 px-12 bg-black/50 rounded-none backdrop-blur-sm border-t-1 border-t-gray-600">
      {options.map((option) => (
        <Button className="flex-grow h-full" 
        key={option.href} 
        variant='light'
        isIconOnly radius="none">
          <Link to={option.href} 
          className={`text-white w-full h-full grid place-items-center`}>
            <option.component size={24} />
          </Link>
        </Button>
      ))}
    </ButtonGroup>
  );
}
