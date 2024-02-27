import { Card, Progress } from '@nextui-org/react';

export default function ProgressBars({ config }) {
  console.log(config);

  return (
    <Card className="p-2">
      {config.map((item, index) => {
        return (
          <Progress
            className="py-2"
            color={item.color}
            value={item.value}
            label={item.title}
            formatOptions={{ style: 'decimal' }}
            showValueLabel
            maxValue={10}
            key={index}
          />
        );
      })}
    </Card>
  );
}
