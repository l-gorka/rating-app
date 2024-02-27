import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

import { useSelector } from 'react-redux';
import { IRootState } from 'src/store/reducers';

import { signOut } from '@aws-amplify/auth';

interface NavBarProps {
  title?: string;
  children?: React.ReactNode;
}
export default function NavBar({ title, children }: NavBarProps) {
  const userEmail = useSelector((state: IRootState) => state.userEmail);

  return (
    <Navbar isBordered position="sticky" height="3.5rem">
      <NavbarContent>
        <NavbarBrand>
          <h1 className=" font-bold text-large">{title}</h1>
        </NavbarBrand>
        {children}
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar size="sm" />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{userEmail}</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              <Button variant="bordered" color="warning" className="w-full" onClick={() => signOut()}>
                Logout
              </Button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
