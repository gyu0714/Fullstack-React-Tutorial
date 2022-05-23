import React, { useRef, useState } from 'react';

const useRef1 = () => {
  // userState : 렌더링이 계속 일어난다
  const [stateNumber, setStateNumber] = useState(0);

  const updateStateNumber = () => {
    setStateNumber(stateNumber + 1);
    console.log(`stateNumber: ${stateNumber} `);
  };
  //   console.log('--rendering--');

  // useRef : 내부적으로는 실행되지만 렌더링은 일어나지 않는다.
  const refNumber = useRef(0);

  const updateRefNumber = () => {
    refNumber.current += 1;
    console.log(`refNumber.current:${refNumber.current}`);
  };

  return (
    <div>
      <div>
        <p>StateNumber : {stateNumber}</p>
        <button onClick={updateStateNumber}>+1</button>
      </div>
      <hr />
      <div>
        <p>RefNumber : {refNumber.current}</p>
        <button onClick={updateRefNumber}>+1</button>
      </div>
    </div>
  );
};

export default useRef1;
