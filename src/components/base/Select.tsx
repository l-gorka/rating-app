import { Select, SelectItem, SelectItemProps, SelectSection, Selection } from '@nextui-org/react';

interface Option extends SelectItemProps {
  label: string;
}
interface SelectProps {
  onChange: (keys: Selection) => void;
  options: Option[];
  label: string;
  value?: Selection;
  required?: boolean;
  canAddCategory?: boolean;
  labelPlacement?: string;
  errorMessage?: string;
  children?: React.ReactNode;
}

export const BaseSelect = ({ options, label, required, value, errorMessage, onChange }: SelectProps) => {
  return (
    <Select
      label={label}
      isRequired={required}
      selectedKeys={value}
      errorMessage={errorMessage}
      isInvalid={!!errorMessage}
      variant="bordered"
      radius="sm"
      size="lg"
      onSelectionChange={onChange}
    >
      <SelectSection>
        {options &&
          options.map((option, index) => {
            return (
              <SelectItem {...option} key={index} textValue={option.label}>
                {option.label}
              </SelectItem>
            );
          })}
      </SelectSection>
    </Select>
  );
};
