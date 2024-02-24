import { Button, Card, Textarea } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { LuTrash } from "react-icons/lu";

export default function AddTextArea({ onConfigChange, onFieldRemove }) {
  const [label, setLabel] = useState('');

  useEffect(() => {
    onConfigChange(label);
  }, [label]);

  return (
    <>
      <Card className="p-2" radius="sm">
        <div className="flex justify-between items-center align-middle my-2">
          <span className=" text-lg">Textarea</span>
          <Button isIconOnly variant='bordered' onClick={onFieldRemove}>
            <LuTrash />
          </Button>
        </div>
        <Textarea
          placeholder="+ Add field name"
          variant="bordered"
          radius="sm"
          maxLength={16}
          onChange={(e) => setLabel(e.target.value)}
        />
      </Card>
    </>
  );
}
