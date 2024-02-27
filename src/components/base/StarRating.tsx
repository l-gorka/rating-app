'use client'
import { HiOutlineStar, HiMiniStar } from 'react-icons/hi2';

export const StarRating = ({ rating = 0, maxRating = 5 }) => {
  console.log(rating)
  const starArray = [...Array(maxRating)].map((_, i) => i + 1);
  return (
    <div className="flex justify-center gap-4">
      {starArray.map((star) =>
        star <= rating ? (
          <HiMiniStar key={star} className="text-yellow-500" size={40} />
        ) : (
          <HiOutlineStar key={star}  className="text-yellow-500" size={40} />
        )
      )}
    </div>
  );
}
