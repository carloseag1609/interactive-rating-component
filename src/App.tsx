import { useState } from "react";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";

import { RatingSelector } from "./components/RatingSelector";
import { ThankYou } from "./components/ThankYou";
import { Attribution } from "./components/Attribution";

const App = () => {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  return (
    <LazyMotion features={domAnimation}>
      <div className="mx-auto w-[90%] md:w-[28rem] h-[25rem] rounded-2xl md:rounded-3xl bg-gradient-to-t from-[#171e28] to-[#232a32] drop-shadow p-8 text-white relative">
        <div className="w-full h-full flex flex-col justify-around">
          <AnimatePresence initial={false}>
            {selectedRating > 0 && formSubmitted ? (
              <ThankYou />
            ) : (
              <RatingSelector
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
                setFormSubmitted={setFormSubmitted}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
      <Attribution />
    </LazyMotion>
  );
};

export default App;
