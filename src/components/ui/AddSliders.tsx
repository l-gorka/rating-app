import { Button, Card, Slider } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';

interface AddSlider extends React.Component {
  onConfigChange: (e: any) => void;
  onFieldRemove: () => void;
}

interface SliderConfig {
  title?: string
  color?: string
}

const colors = ['default', 'secondary', 'success', 'warning', 'danger'];
export default function AddSliders({ onConfigChange, onFieldRemove }:AddSlider) {
  const [config, setConfig] = useState<SliderConfig[]>([{title: '', color: 'default'}]);

  const handleStartEdit = (e) => {
    e.stopPropagation();
  };

  const handleInput = (e, index) => {
    const updatedConfig = [...config].map((item, i) => ({ ...item, title: i === index ? e.target.value : item.title }));
    setConfig(updatedConfig);
  };

  const handleSliderChange = (e, index) => {
    const updatedConfig = [...config].map((item, i) => ({ ...item, color: i === index ? colors[e] : item.color }));
    setConfig(updatedConfig);
  };

  const handleAddSlider = () => {
    setConfig([...config, { title: '', color: 'default'}]);
  };

  const handleRemoveSlider = (index: number) => {
    const updatedConfig = [...config].filter((_, i) => i !== index);
    setConfig(updatedConfig);
  };

  useEffect(() => {
    if (config.length === 0) {
      onFieldRemove();
      return;
    }

    onConfigChange(config);
  }, [config]);

  return (
    <>
      <Card className="p-2" radius="sm">
        <div className="flex justify-between items-center align-middle my-2">
          <span className=" text-lg">Sliders</span>
          <Button isIconOnly variant='bordered' onClick={handleAddSlider}>
            <FaPlus />
          </Button>
        </div>
        {config.map((item, index) => {
          return (
            <div className="py-2" key={index}>
              <Slider
                color={item.color}
                renderValue={() => (
                  <button onClick={() => handleRemoveSlider(index)}>
                    <IoIosClose size={28} />
                  </button>
                )}
                label={
                  <div className="flex gap-2">
                    <input
                      value={item.title}
                      placeholder="+ Add label"
                      style={{ backgroundColor: '#18181B' }}
                      onClick={(e) => handleStartEdit(e)}
                      onChange={(e) => handleInput(e, index)}
                    />
                  </div>
                }
                maxValue={colors.length - 1}
                onChange={(e) => handleSliderChange(e, index)}
              />
            </div>
          );
        })}
      </Card>
    </>
  );
}
