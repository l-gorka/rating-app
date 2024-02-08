import { Navbar, NavbarBrand, NavbarContent, Avatar } from '@nextui-org/react';

interface NavBarProps {
  title?: string;
  children?: React.ReactNode;
}
export default function NavBar({ title, children }: NavBarProps) {
  return (
    <Navbar isBordered position='sticky'  height="3.5rem">
      <NavbarContent>
        <NavbarBrand><h1 className=' font-bold text-large'>{title}</h1></NavbarBrand>
        {children}
        <Avatar size='sm'>as</Avatar>
      </NavbarContent>
    </Navbar>
  );
}
