import { Card } from '@nextui-org/react';
import { IoCameraOutline } from 'react-icons/io5';

export const AddPhoto = () => {
  return (
    <Card className="w-full aspect-square grid place-items-center gap-4">
      <div className='gap-4 grid place-items-center p-12 border-8 border-gray-500 border-dashed rounded-3xl'>
        <IoCameraOutline size={48} />
        <h2 className='text-xl'>Add photo</h2>
      </div>
    </Card>
  );
};
