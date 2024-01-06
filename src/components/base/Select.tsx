import { Select, SelectItem, SelectItemProps, SelectSection } from '@nextui-org/react';

interface SelectProps {
  options: SelectItemProps[];
  label: string;
  required?: boolean;
  canAddCategory?: boolean;
  labelPlacement?: string;
  children?: React.ReactNode;
}

export const BaseSelect = ({ options, label, required }: SelectProps) => {
  return (
    <Select label={label} isRequired={required} variant="bordered" radius="sm" size="lg">
      <SelectSection>
        {options &&
          options.map((option, index) => {
            return (
              <SelectItem {...option} key={index}>
                {option.value}
              </SelectItem>
            );
          })}
      </SelectSection>
    </Select>
  );
};
