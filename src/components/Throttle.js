import React, { useState, useRef, useEffect } from "react";
import { throttle } from "../utils/utils";

const Throttle = () => {
  const [count, setCount] = useState(0);
  const didMount = useRef(false);
  const throttledClick = useRef(throttle(getData, 1000)).current;

  useEffect(() => {
    if (didMount.current) {
      throttledClick(count);
    } else {
      didMount.current = true;
    }
  }, [count]);

  function getData(count) {
    console.log(`clicked items ${count}`);
  }

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <React.Fragment>
      <button onClick={handleClick}>Click here</button>
    </React.Fragment>
  );
};

export default Throttle;
