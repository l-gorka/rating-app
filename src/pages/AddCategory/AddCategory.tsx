import RouteTransition from 'src/components/transition/RouteTransition';
import { Button, Input, Divider } from '@nextui-org/react';

import Sliders from 'src/components/base/Sliders';
import AddTextField from 'src/components/base/TextField';

import NavBar from 'src/components/ui/NavBar';
import { nanoid } from '@reduxjs/toolkit';

import { useState, ChangeEvent, FunctionComponent } from 'react';

import { useAppDispatch } from 'src/store/configureStore';
import { fetchCategories } from 'src/store/reducers';

import { generateClient } from 'aws-amplify/api';
import { createCategory } from 'src/graphql/mutations';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

export type InnerFieldConfig = {
  title: string;
  color?: string;
  value?: number | string;
};

interface FieldConfig {
  key: string;
  type: string;
  component: FunctionComponent<{
    config: InnerFieldConfig[];
    isEditable: boolean;
    onChange: (e: any) => void;
    onFieldRemove: () => void;
  }>;
  config: InnerFieldConfig[];
}

const slidersField = {
  type: 'slider',
  component: Sliders,
  config: [
    {
      title: '',
      color: 'default',
      value: 0,
    },
  ],
};

const textAreaField = {
  type: 'textarea',
  component: AddTextField,
  config: [
    {
      title: '',
    },
  ],
};

export default function AddCategory() {
  const [config, setConfig] = useState<FieldConfig[]>([]);

  const handleAddSlider = () => {
    setConfig([...config, { ...slidersField, key: nanoid() }]);
  };

  const handleBaseTextArea = () => {
    setConfig([...config, { ...textAreaField, key: nanoid() }]);
  };

  const onFieldRemove = (index: number) => {
    const updatedConfig = [...config].filter((_, i) => i !== index);
    setConfig(updatedConfig);
  };

  const onConfigChange = (fieldsConfig: FieldConfig, index: number) => {
    const updatedConfig = [...config].map((item, i) => ({ ...item, config: index === i ? fieldsConfig : item.config }));

    setConfig(updatedConfig as FieldConfig[]);
  };

  const [state, setState] = useState({
    name: '',
    error: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const onBlur = () => {
    const errorMsg = state.name.length < 3 ? 'Name must be at least 3 characters' : '';

    setState({
      ...state,
      error: errorMsg,
    });
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      error: '',
      name: (e.target as HTMLInputElement).value,
    });
  };

  const client = generateClient();
  const navigate = useNavigate();

  const handleSave = async () => {
    setIsLoading(true);

    const parsedConfig = parseConfig();

    try {
      const res = await client.graphql({
        query: createCategory,
        variables: {
          input: {
            name: state.name,
            fields: parsedConfig,
          },
        },
      });

      await dispatch(fetchCategories());
      setIsLoading(false);
      toast.success(`${state.name} category created successfully`);

      navigate('/add-item', { state: { id: res.data.createCategory.id } });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const parseConfig = () => JSON.stringify(config.map(({ type, config }) => ({ type, config })));

  return (
    <RouteTransition transitionKey="catList">
      <NavBar title="Add Category" />
      <main className="p-4">
        <div className="h-20 grid place-items-center">
          <Input
            id="add-category-name"
            variant="bordered"
            label="Name"
            labelPlacement="inside"
            required
            value={state.name}
            errorMessage={state.error}
            isInvalid={!!state.error}
            onChange={(e) => onChangeName(e)}
            onBlur={onBlur}
            onKeyDown={(e) => e.key === 'Enter' && onBlur()}
            onKeyUp={(e) => e.key === 'Enter' && !state.error && handleSave()}
          />
        </div>
        <div className="grid gap-2 ">
          {config.map((item, index) => {
            return (
              <div key={item.key}>
                <item.component
                  config={item.config}
                  isEditable={true}
                  onChange={(e: FieldConfig) => onConfigChange(e, index)}
                  onFieldRemove={() => onFieldRemove(index)}
                />
              </div>
            );
          })}
          <div className="flex gap-2 mt-4 ">
            <Button onClick={handleAddSlider}>Add Sliders</Button>
            <Button onClick={handleBaseTextArea}>Add Textarea</Button>
          </div>
        </div>
        <Divider className="my-4" />
        <div className="flex justify-center">
          <Button
            size="lg"
            className="w-full h-16"
            variant="bordered"
            color="warning"
            radius="sm"
            isDisabled={!state.name.length || !!state.error}
            isLoading={isLoading}
            onClick={handleSave}
          >
            <span className="text-lg font-semibold tracking-wide">Add Category</span>
          </Button>
        </div>
      </main>
    </RouteTransition>
  );
}
