import { Input, Textarea } from '@nextui-org/react';

export interface FieldConfig {
  component: React.FunctionComponent
  label?: string;
  key: string;
  value: string;
  isRequired?: boolean;
  placeholder?: string;
  errorMessage?: string;
  validation?: {
    testFunction: (value: string) => string;
  }

}

export const fieldsConfig: FieldConfig[] = [
  {
    component: Input,
    validation: {
      testFunction: (value: string) => {
        if (!value) {
          return 'title is required';
        }

        return value.length > 2 ? '' : 'title must be more than 2 characters';
      },
    },
    key: 'title',
    label: 'Title',
    isRequired: true,
    value: '',
  },
  {
    component: Textarea,
    key: 'description',
    placeholder: 'Enter description',
    value: '',
  },
];