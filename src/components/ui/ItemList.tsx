import { FaCircle, FaChevronRight } from "react-icons/fa";

interface ItemListProps {
  name: string;
  count: number;
}

export const ItemList = ({name, count}: ItemListProps) => {
  return (
    <div className='w-full flex p-4 rounded-sm items-center bg-zinc-900'>
      <FaCircle className='mr-4 ml-2' size={16} color='#F4A423'/>
      <span className='text-lg flex-grow'>{name}</span>
      <div className='flex gap-2 text-gray-400 items-center'>
        <span className='text-lg '>{count}</span>
        <FaChevronRight />
      </div>
    </div>
  )
}