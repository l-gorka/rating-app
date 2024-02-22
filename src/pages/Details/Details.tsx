'use client';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Image, Card, CardBody, Button } from '@nextui-org/react';
import { LuShare2 } from 'react-icons/lu';
import { GoHeart } from 'react-icons/go';

import RouteTransition from 'src/components/transition/RouteTransition';

import {StarRating} from 'src/components/base/StarRating.tsx';
import TextField from 'src/components/base/TextField';

export default function Details() {
  const [windowWidth, setWindowWidth] = useState<number>(1200);

  const location = useLocation();

  const { title, description, rating, image } = location.state; 

  return (
    <RouteTransition transitionKey="details">
      <div className="relative mb-20 w-full aspect-square">
        <Image
          radius="none"
          alt="NextUI hero Image"
          width={windowWidth}
          height={windowWidth}
          src={image}
        />
        <Card
          isBlurred
          radius="lg"
          className="bg-background/40  absolute top-4/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-3xl"
        >
          <CardBody>
            <p className=" text-9xl text-center mb-2">{Number(rating).toFixed(1)}</p>
          </CardBody>
        </Card>
        <div className="absolute bottom-5 right-7 z-10 flex flex-col gap-4">
          <Button isIconOnly variant="light" className="bg-black/25" size="lg" aria-label="Take a photo">
            <LuShare2 size={28} />
          </Button>
          <Button isIconOnly variant="light" className="bg-black/25" size="lg" aria-label="Take a photo">
            <GoHeart size={28} />
          </Button>
        </div>
      </div>
      <StarRating rating={4.8} />
      <div className="p-4 mt-10">
        <h1 className="text-5xl text-center tracking-wide mb-10 text-wrap truncate">{title}</h1>
        <TextField value={description} />
      </div>
    </RouteTransition>
  );
}
