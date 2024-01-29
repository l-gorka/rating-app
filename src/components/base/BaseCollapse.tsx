import { useState } from 'react';

import { Button } from '@nextui-org/react';
import { FiFilter } from 'react-icons/fi';

export default function BaseCollapse({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-5 z-10">
        <Button
          isIconOnly
          color="warning"
          variant="faded"
          size="lg"
          aria-label="Take a photo"
          className="w-14 h-14"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiFilter size={24} />
        </Button>
      </div>
      <div className={`fixed ${isOpen ? ' translate-y-0' : 'translate-y-full'} w-full z-20 bg-black`}>{children}</div>
    </>
  );
}
