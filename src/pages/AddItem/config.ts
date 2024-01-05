import { Input, Textarea } from '@nextui-org/react'
import { BaseSelect } from 'src/components/base/Select'

export const fieldsConfig = [
  {
    component: BaseSelect,
    props: {
      label: 'Select category',
      required: true,
      options: ['asd', 'def']
    }
  },
  {
    component: Input,
    props: {
      label: 'Enter title',
    }
  },
  {
    component: Textarea,
    props: {
      label: 'Enter description',
    }
  }
]