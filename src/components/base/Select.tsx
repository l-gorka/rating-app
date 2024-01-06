import { Select, SelectItem } from '@nextui-org/react';

interface SelectProps {
  options: string[];
  label: string;
  required?: boolean;
  labelPlacement?: string;
}
export const BaseSelect = ({ options, label, required, labelPlacement }: SelectProps) => {
  console.log(labelPlacement)
  return (
    <Select label={label} isRequired={required} variant="bordered" radius="sm" size="lg">
      {options &&
        options.map((option) => {
          return (
            <SelectItem
              key={option}
              value={option}
              textValue={option}
              variant="bordered"

              classNames={{ title: 'text-xl' }}
            >
              {option}
            </SelectItem>
          );
        })}
    </Select>
  );
};
