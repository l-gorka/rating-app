import { Card, CardFooter, Image } from '@nextui-org/react';


export const ItemCard = ({
  title,
  photo,
  showRating,
  rating,
}: {
  showRating?: boolean,
  id: number;
  title: string;
  photo: string;
  rating?: number;
}) => {

  return (
      <Card isFooterBlurred radius="sm">
        {showRating && 
          <div className='absolute top-2 right-2 z-10 p-1 grid place-items-center bg-black/50 text-lg font-bold rounded-md'>
            {rating}
          </div>
        }
        <Image
          alt="Card background"
          className="z-0 w-full aspect-square"
          height={200}
          width={200}
          src={photo}
          radius="sm"
        />
        <CardFooter className="absolute bg-black/50 bottom-0 border-t-1 z-10">
          <p className=" text-small">{title}</p>
        </CardFooter>
      </Card>
  );
};
