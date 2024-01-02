import { Badge, Card, CardFooter, Image} from '@nextui-org/react';

const CategoryCard = ({
  title,
  image,
  numberOfItems,

}: {
  id: number;
  title: string;
  image: string;
  numberOfItems: number;
}) => {
  return (
    <Badge content={numberOfItems} variant='flat' size='lg' className='mt-2 me-2'>
      <Card isFooterBlurred radius='sm'>
        <Image
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          height={200}
          width={200}
          src={image}
          radius='sm'
        />

        <CardFooter style={{backgroundColor: 'rgba(0,0,0,0.50)'}} className="absolute bg-black bottom-0 border-t-1 z-10">
          <div className=''>
            <p className="text-black text-small bg-black">{title}</p>
          </div>
        </CardFooter>
      </Card>
      </Badge>
  );
};

export default CategoryCard;
