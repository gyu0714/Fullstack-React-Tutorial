import React, { useState } from 'react';

const UseState1 = () => {
  const [time, setTime] = useState(1);
  const updateTime = () => {
    // 24시간까지만 표기할 수 있도록
    // 24이후에 time이 다시 1이 되도록
    setTime((num) => {
      if (time < 24) {
        return time + 1;
      } else {
        return 1;
      }
    });
  };
  return (
    <div>
      <span>Now : {time}</span>
      <button onClick={updateTime}>Click!</button>
    </div>
  );
};

export default UseState1;
