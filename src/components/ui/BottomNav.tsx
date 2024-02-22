import { Button, ButtonGroup } from '@nextui-org/react';
import { NavLink } from 'react-router-dom';
import { FunctionComponent } from 'react';

import { useRouteAnimation } from 'src/hooks/useRouteAnimation';

interface BottomNavItem {
  component: FunctionComponent<{
    size: number;
  }>;
  href: string;
}

export default function BottomNav({ options }: { options: BottomNavItem[] }) {
  const { handleLinkClick } = useRouteAnimation();

  return (
    <div className="fixed bottom-0 left-0 w-full backdrop-blur-sm bg-black/75">
      <ButtonGroup className="flex z-10 w-full h-16 px-8  rounded-none  border-t-1 border-t-gray-600">
        {options.map((option) => (
          <Button className="flex-grow h-full" key={option.href} variant="light" isIconOnly radius="none">
            <NavLink
              to={option.href}
              onClick={(e) => handleLinkClick(e, option.href)}
              className={`text-white w-full h-full grid place-items-center`}
              style={({ isActive }) => ({ color: isActive ? '#F4A423' : 'white' })}
            >
              <option.component size={24} />
            </NavLink>
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
