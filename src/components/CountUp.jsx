import React, { useState, useRef, useEffect } from "react";

const CountUp = ({ start = 0, end, timer = 500 }) => {
  const [state, setState] = useState(null);
  const ref = useRef(start);

  const accumulator = end / 200;
  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      setState(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, timer);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }
    isMounted = false;
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, start]);

  return <span className="inline">{state}</span>;
};

export default CountUp;
