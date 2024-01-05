import { Card, CardFooter, Image } from '@nextui-org/react';


export const ItemCard = ({
  title,
  image,
  showRating,
  rating
}: {
  showRating?: boolean,
  id: number;
  title: string;
  image: string;
  rating?: number;
}) => {

  return (
      <Card isFooterBlurred radius="sm">
        {showRating && 
          <div className='absolute top-2 right-2 z-10 w-10 grid place-items-center bg-black/50 text-lg rounded-md'>
            {rating}
          </div>
        }
        <Image
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          height={200}
          width={200}
          src={image}
          radius="sm"
        />
        <CardFooter className="absolute bg-black/50 bottom-0 border-t-1 z-10">
          <p className=" text-small">{title}</p>
        </CardFooter>
      </Card>
  );
};
