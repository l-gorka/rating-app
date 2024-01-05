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
    <ButtonGroup className="z-10 bg-black/25 w-screen rounded-none backdrop-blur-sm px-12">
      {options.map((option) => (
        <Button className="flex-col w-full h-14" key={option.href} variant="light" isIconOnly radius="none">
          <Link to={option.href} className={`text-white w-full h-full grid place-items-center ${path === option.href ? 'text-red-500' : ''}`}>
            <option.component size={24} color='#c1c1c1' />
          </Link>
        </Button>
      ))}
    </ButtonGroup>
  );
}
