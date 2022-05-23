import React, { useRef, useState } from 'react';

const useRef2 = () => {
  const [number, setNumber] = useState(0);

  const updatenumber = () => {
    setNumber(number + 1);
    console.log(`Number : ${number}`);
  };

  const refNumber = useRef(0);
  const updateRefNumber = () => {
    refNumber.current += 1;
    console.log(`refNumber : ${refNumber.current}`);
  };

  const [renderVar, setRenderNumbers] = useState(0);

  const renderPage = () => {
    setRenderNumbers(renderVar + 1);
  };

  const renderNumbers = () => {
    console.log(`Number : ${number}`);
    console.log(`refNumber : ${refNumber.current}`);
  };
  return (
    <div>
      <div>
        <p>Number : {number}</p>
        <button onClick={updatenumber}> +1</button>
      </div>
      <hr />
      <div>
        <p>RefNumber : {refNumber.current}</p>
        <button onClick={updateRefNumber}>+1</button>
      </div>
      <hr />
      <div>
        <button onClick={renderPage}>Render</button>
      </div>
      <div>
        <button onClick={renderNumbers}>show Render</button>
      </div>
    </div>
  );
};

export default useRef2;
