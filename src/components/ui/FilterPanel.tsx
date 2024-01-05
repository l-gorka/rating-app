import { Input, Button } from '@nextui-org/react'
import { HiSortAscending,  } from "react-icons/hi";

export const FilterPanel = () => {

  return (
    <div className='w-full flex gap-2 p-3'>
      <Input type="email" variant='bordered' radius='sm' label="Search" />
      <Button isIconOnly><HiSortAscending /></Button>
      <Button isIconOnly></Button>
    </div>
  )
}