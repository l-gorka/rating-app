import { Input } from '@nextui-org/react';

export const BaseInput = ({ isDisabled, config, onChange, isRequired }) => {
  const handleChange = (e) => {
    onChange({...config, value: e })
  }

  return (
    <Input
      {...config}
      size="lg"
      variant="bordered"
      radius="sm"
      isRequired={isRequired}
      isEditable={false}
      isDisabled={isDisabled}
      label={config.label}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
