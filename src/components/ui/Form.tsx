import { ChangeEvent } from 'react';

export const Form = ({ config, isDisabled, onChange, onBlur }) => {

  return (
    <div className="flex flex-col gap-4">
      {config.map((item) => {
        return (
          <div key={item.key}>
            <item.component
              {...item}
              size="lg"
              variant="bordered"
              radius="sm"
              isDisabled={isDisabled}
              isInvalid={!!item.errorMessage}
              onChange={(e: ChangeEvent) => onChange(item.key, (e.target as HTMLInputElement).value, false)}
              onBlur={(e: ChangeEvent) => onBlur(item.key, (e.target as HTMLInputElement).value, true)}
            />
          </div>
        );
      })}
    </div>
  );
};
