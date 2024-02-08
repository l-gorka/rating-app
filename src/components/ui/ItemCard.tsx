import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { HiMiniStar } from 'react-icons/hi2';
import { useRef, useLayoutEffect, useState } from 'react';
import { MdOutlineNoPhotography } from "react-icons/md";



export const ItemCard = ({
  title,
  image,

  rating,
}: {
  showRating?: boolean;
  id: number;
  title: string;
  image: string;
  rating?: number;
}) => {
  const [cardDimensions, setCardDimensions] = useState<number>(100)
  const card = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (card?.current) {
      setCardDimensions(card.current.getBoundingClientRect().width)
    }
  }, [])

  return (
    <Card radius="lg"  className="relative border-1 border-zinc-600" ref={card}>
      <CardBody className=" overflow-visible z-10 p-0">
        {image ?
          <Image
            alt="Card background"
            className="z-0 w-full aspect-square border-b-1 border-zinc-600"
            src={image}
            height={cardDimensions}
            width={cardDimensions}
            radius="lg"
          />
          : 
          <div style={{height: cardDimensions, width: cardDimensions}} className='grid place-items-center rounded-2xl border-b-1 border-zinc-600'>
            <MdOutlineNoPhotography size={48}/>
          </div>
        }
        <div className="absolute transform -bottom-4 z-20 left-1/2 -translate-x-1/2  bg-black/50 rounded-xl p-1 px-3 text-warning flex gap-1 items-center backdrop-blur-sm">
          <HiMiniStar size={20} />
          <span className="text-lg">{Number(rating)?.toFixed(1)}</span>
        </div>
      </CardBody>

      <CardFooter className="flex justify-between bg-black/50 bottom-0 pt-4">
        <p className="text-small">{title}</p>
      </CardFooter>
    </Card>
  );
};
