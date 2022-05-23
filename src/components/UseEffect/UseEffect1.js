import React, { useEffect, useState } from 'react';

const UseEffect1 = () => {
  const [number, setNumber] = useState(0);

  const updateNumber = () => {
    setNumber(number + 1);
  };

  const [input, setInput] = useState();

  const inputValueChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  // useEffect 수행 코드 : console.log("--useEffect 실행")
  // number가 변할때만 useEffect 실행
  useEffect(() => {
    console.log('--useEffect : 실행');
  }, []);

  useEffect(() => {
    console.log('--useEffect : number'); // number가 변할때만 useEffect 실행
  }, [number]);

  // input이 변할때만 useEffect 실행
  useEffect(() => {
    console.log('--useEffect : input');
  }, [input]);

  return (
    <div>
      <div>
        <button onClick={updateNumber}>+1</button>
        <span>Current Number {number}</span>
      </div>
      <div>
        <input type="text" onChange={inputValueChange} />
        <p onChange={inputValueChange}>{input}</p>
      </div>
    </div>
  );
};

export default UseEffect1;
