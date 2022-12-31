import { FC } from "react";
import iconStar from "../assets/icon-star.svg";

import { m } from "framer-motion";

const ratings = [1, 2, 3, 4, 5] as const;

interface Props {
  selectedRating: number;
  setSelectedRating: (rating: number) => void;
  setFormSubmitted: (submitted: boolean) => void;
}

export const RatingSelector: FC<Props> = ({
  selectedRating,
  setSelectedRating,
  setFormSubmitted,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedRating === 0) return;
    setFormSubmitted(true);
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-[#262D37] mb-6 w-10 h-10 flex items-center justify-center rounded-full">
        <img src={iconStar} alt="Icon star" />
      </div>
      <h2 className="text-2xl font-semibold text-white my-3">How did we do?</h2>
      <p className="text-light-grey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between my-6">
          {ratings.map((rating) => (
            <m.label
              htmlFor={`rating-${rating}`}
              className={`w-12 h-12 md:w-14 md:h-14 cursor-pointer rounded-full flex items-center justify-center ${
                rating === selectedRating
                  ? "bg-orange hover:bg-orange"
                  : "bg-[#262D37] hover:bg-light-grey"
              } relative hover:text-white transition-colors duration-200 ease-in-out z-99`}
              key={rating}
              onClick={() => setSelectedRating(rating)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
            >
              <input
                id={`rating-${rating}`}
                type="radio"
                className="w-full h-full absolute top-0 left-0 -z-99 opacity-0 cursor-pointer"
              />
              <span className="text-white font-medium text-lg">{rating}</span>
            </m.label>
          ))}
        </div>
        <m.button
          type="submit"
          className="w-full rounded-full bg-orange p-3 hover:bg-white hover:text-orange transition-colors duration-200 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
        >
          <span>Submit</span>
        </m.button>
      </form>
    </m.div>
  );
};
