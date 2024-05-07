import { Button, Card, Textarea } from '@nextui-org/react';
import { LuTrash } from 'react-icons/lu';

import { InnerFieldConfig} from 'src/pages/AddCategory/AddCategory'

type TextFieldProps = {
  config: InnerFieldConfig[];
  isEditable: boolean;
  onChange: (e: any) => void;
  onFieldRemove: () => void;
}

export default function BaseTextArea({ onChange, onFieldRemove, isEditable, config }: TextFieldProps) {
  const handleChange = (e) => {
    const valuePropety = isEditable? 'label' : 'value'
    onChange({...config, [valuePropety]: e })
  }
  
  return (
    <>
      {isEditable ? (
        <Card className="p-2" radius="sm">
          <div className="flex justify-between items-center align-middle my-2">
            <span className=" text-lg">Textarea</span>
            <Button isIconOnly variant="bordered" onClick={onFieldRemove}>
              <LuTrash />
            </Button>
          </div>
          <Textarea
            placeholder={isEditable ? 'Add label' : ''}
            variant="bordered"
            radius="sm"
            maxLength={16}
            value={config.value}
            onChange={(e) => handleChange(e.target.value)}
          />
        </Card>
      ) : (
        <Textarea
          label={config.label}
          variant="bordered"
          radius="sm"
          value={config.value}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
    </>
  );
}
