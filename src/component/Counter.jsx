import React, { useState, useEffect } from 'react';

export const CounterBox = ({ label, targetNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 5);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return (
    <div className="w-48 h-40 flex flex-col justify-center items-center bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg text-center">
      <h2 className="md:text-4xl text-xl  font-bold text-primary dark:text-white">{count}+ </h2>
      <p className="sm:text-lg text-sm text-gray-600 dark:text-white">{label}</p>
    </div>
  );
};

const Counters = () => {
  return (
    <div className="flex justify-center items-center gap-2 md:gap-8 p-8 px-2 bg-gray-100">
      <CounterBox label="Happy Customers" targetNumber={1000} duration={2000} />
      <CounterBox label="Projects Completed" targetNumber={250} duration={2000} />
      <CounterBox label="Years of Experience" targetNumber={10} duration={2000} />
    </div>
  );
};

export default Counters;
