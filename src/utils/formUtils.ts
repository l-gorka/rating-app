import { nanoid } from '@reduxjs/toolkit';
import Sliders from 'src/components/base/Sliders';
import BaseTextArea from 'src/components/base/TextField';
import { BaseInput } from 'src/components/base/BaseInput';

const componentsMap = {
  slider: Sliders,
  textarea: BaseTextArea,
  textfield: BaseInput,
};

export const createFormData = (savedFormJson: string) => {
  const formData = [];

  formData.push({
    key: nanoid(),
    type: 'textfield',
    isRequired: true,
    component: BaseInput,
    config: {
      label: 'Item name',
    },
  });

  const savedFormData = JSON.parse(savedFormJson);
  savedFormData.forEach((item) => {
    formData.push({
      ...item,
      key: nanoid(),
      component: componentsMap[item.type],
      config: getConfig(item),
    });
  });

  return formData;
};

const getConfig = (field) => {
  if (field.type === 'slider') {
    return field.config.map((configItem) => ({ ...configItem, value: 0 }));
  }

  return field.config;
};
