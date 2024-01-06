import { useState } from 'react';
import { Form } from 'src/components/ui/Form';

import { AddPhoto } from 'src/components/ui/AddPhoto';
import { StarRating } from 'src/components/base/StarRating';

import { Card, CardBody, Slider, Button, Divider } from '@nextui-org/react';

import RouteTransition from 'src/components/transition/RouteTransition';

import { fieldsConfig } from './config';

export const AddItem = () => {
  const [rating, setRating] = useState([3]);

  return (
    <RouteTransition compKey="details">
      <div className="relative mb-12 w-full aspect-square">
        <AddPhoto />
        <Card
          isBlurred
          radius="lg"
          className="bg-background/40 w-48 absolute top-4/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-3xl"
        >
          <CardBody>
            <p className=" text-8xl text-center mb-2">{rating[0].toFixed(1)}</p>
          </CardBody>
        </Card>
      </div>
      <div className="p-3">
        <StarRating rating={rating[0]} />
        <div className="p-5">
          <Slider
            aria-label="Change the rating"
            step={0.1}
            maxValue={5}
            minValue={1}
            value={rating}
            size="lg"
            color="warning"
            onChange={(e) => setRating(e)}
          />
        </div>

        <div className="mt-8">
          <Form config={fieldsConfig} />
        </div>
        <Divider className='mx-auto my-4 w-11/12' />
        <div className="flex justify-center">
          <Button size="lg" className="w-full h-16" variant="bordered" color='warning' radius="sm" >
            <span className='text-lg font-semibold tracking-wide'>Add Item</span>
          </Button>
        </div>
      </div>
    </RouteTransition>
  );
};
