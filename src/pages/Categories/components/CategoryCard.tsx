import { Card, CardFooter, Image, Button, Badge } from '@nextui-org/react';

const CategoryCard = ({
  title,
  image,
}: {
  id: number;
  title: string;
  image: string;
  numberOfItems: number;
}) => {
  return (
      <Card isFooterBlurred>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          height={300}
          width={200}
          src={image}
        />

        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-small">{title}</p>
          </div>
        </CardFooter>
      </Card>
  );
};

export default CategoryCard;
