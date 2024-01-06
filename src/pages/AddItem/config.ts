import { Input, Textarea } from '@nextui-org/react';


export const fieldsConfig = [
  {
    component: Input,
    props: {
      label: 'Title',
      isRequired: true,
    },
  },
  {
    component: Textarea,
    props: {
      placeholder: 'Enter description',
    },
  },
];

export const addCategory = () => {
  console.log('Add category');
}