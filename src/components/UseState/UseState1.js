import React, { useState } from 'react';

const UseState1 = () => {
  const [time, setTime] = useState(1);

  console.log('--렌더링--');
  console.log('--외부--', time);
  const updateTime = () => {
    // setTime(() => {
    //   if (time < 24) {
    //     return time + 1;
    //   } else {
    //     return 1;
    //   }
    // });
    console.log('--내부--', time);
    // 1. state 변수에는 직접 값을 할당 X
    // time = time + 1;

    // 2. setTime()
    setTime(time + 1);
    console.log('--내부--', time);
  };

  return (
    <div>
      <span>Now : {time}</span>
      <button onClick={updateTime}>Click!</button>
    </div>
  );
};

export default UseState1;
