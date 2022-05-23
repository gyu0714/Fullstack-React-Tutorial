import React, { useState } from 'react';

const UseState2 = () => {
  let students = ['김민규', '랄랄ㄹ라'];
  const [names, setNames] = useState(students);

  const inputValueChange = (e) => {
    // console.log('입력함수 동작');
    const inputValue = e.target.value;
    // console.log(inputValue);
    setInput(inputValue);
  };

  const inputValueRecord = () => {
    setNames((preValue) => {
      //   console.log(preValue);
      return [input, ...preValue];
    });
    setInput('');
    console.log(input);
  };

  const [input, setInput] = useState('');

  return (
    <div>
      <input type="text" onChange={inputValueChange} value={input}></input>
      <button onClick={inputValueRecord}>Record</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
};

export default UseState2;
