import { m } from "framer-motion";

import illustrationThankYou from "../assets/illustration-thank-you.svg";

export const ThankYou = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col items-center justify-center gap-7 text-center"
    >
      <img src={illustrationThankYou} alt="Illustration thank you" />
      <p className="text-orange inline-block bg-medium-grey py-1 px-4 rounded-full">
        You selected {4} out of 5
      </p>
      <div>
        <p className="text-2xl font-semibold mb-2">Thank you!</p>
        <p className="text-light-grey text-sm md:text-base">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </m.div>
  );
};
