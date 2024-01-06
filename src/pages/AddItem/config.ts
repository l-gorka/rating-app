import { Input, Textarea } from '@nextui-org/react'
import { BaseSelect } from 'src/components/base/Select'

export const fieldsConfig = [
  {
    component: BaseSelect,
    props: {
      label: 'Category',
      required: true,
      options: ['asd', 'def']
    }
  },
  {
    component: Input,
    props: {
      label: 'Title',
      isRequired: true,
    }
  },
  {
    component: Textarea,
    props: {
      placeholder: 'Enter description',
    }
  }
]