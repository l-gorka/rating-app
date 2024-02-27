import { Button, Card, Slider } from '@nextui-org/react';
import { p } from 'node_modules/msw/lib/core/GraphQLHandler-907fc607';
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';

interface AddSlider extends React.Component {
  onConfigChange: (e: any) => void;
  onFieldRemove: () => void;
}

interface SliderConfig {
  title?: string;
  color?: string;
}

const colors = ['default', 'secondary', 'success', 'warning', 'danger'];
export default function Sliders({ onChange, onFieldRemove, isEditable, config }: AddSlider) {
  const handleStartEdit = (e) => {
    e.stopPropagation();
  };

  const handleInput = (e, index) => {
    const updatedConfig = [...config].map((item, i) => ({ ...item, title: i === index ? e.target.value : item.title }));
    onChange(updatedConfig);
  };

  const handleSliderChange = (e, index) => {
    let updatedConfig;

    if (isEditable) {
      updatedConfig = [...config].map((item, i) => ({ ...item, color: i === index ? colors[e] : item.color }));
    } else {
      updatedConfig = [...config].map((item, i) => ({ ...item, value: i === index ? e[0] : item?.value }));
    }
    onChange(updatedConfig);
  };

  const handleAddSlider = () => {
    onChange([...config, { title: '', color: 'default' }]);
  };

  const handleRemoveSlider = (index: number) => {
    const updatedConfig = [...config].filter((_, i) => i !== index);
    onChange(updatedConfig);
  };

  useEffect(() => {
    if (isEditable && config.length === 0) {
      onFieldRemove();
      return;
    }

    onChange(config);
  }, [config]);
  return (
    <>
      <Card className="p-2" radius="sm">
        {isEditable ? (
          <div className="flex justify-between items-center align-middle my-2">
            <span className=" text-lg">Sliders</span>
            <Button isIconOnly variant="bordered" onClick={handleAddSlider}>
              <FaPlus />
            </Button>
          </div>
        ) : (
          <></>
        )}

        {config.length &&
          config.map((item, index) => {
            return (
              <div className="py-2" key={index}>
                <Slider
                  color={item.color}
                  renderValue={() =>
                    isEditable ? (
                      <button onClick={() => handleRemoveSlider(index)}>
                        <IoIosClose size={28} />
                      </button>
                    ) : (
                      <span className='text-sm'>{item.value}</span>
                    )
                  }
                  label={
                    isEditable ? (
                      <input
                        value={item.title}
                        placeholder="+ Add label"
                        style={{ backgroundColor: '#18181B' }}
                        onClick={(e) => handleStartEdit(e)}
                        onChange={(e) => handleInput(e, index)}
                      />
                    ) : (
                      <p>{item.title}</p>
                    )
                  }
                  maxValue={isEditable ? colors.length - 1 : 10}
                  onChange={(e) => handleSliderChange(e, index)}
                />
              </div>
            );
          })}
      </Card>
    </>
  );
}
