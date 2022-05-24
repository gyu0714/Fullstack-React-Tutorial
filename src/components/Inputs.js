import React, { useState } from 'react';

const Inputs = () => {
  //   const [name, setName] = useState('');
  //   const [nickName, setNickName] = useState('');

  const [inputs, setInputs] = useState({
    name: '',
    nickName: '',
  });

  const { name, nickName } = inputs;

  //   const changeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const changeNickName = (e) => {
  //     // console.log(e.target.value);
  //     setNickName(e.target.value);
  //   };

  //   const resetInputs = () => {
  //     setName('');
  //     setNickName('');
  //     };

  const changeInputs = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetInputs = () => {
    setInputs({
      name: '',
      nickName: '',
    });
  };

  return (
    <div>
      <h1>이름 : {name}</h1>
      <h1>닉네임 : {nickName}</h1>

      <input
        type="text"
        name="name"
        value={name}
        placeholder="이름"
        onChange={changeInputs}
      />
      <input
        type="text"
        name="nickName"
        value={nickName}
        placeholder="닉네임"
        onChange={changeInputs}
      />
      <button onClick={resetInputs}>Reset</button>
    </div>
  );
};

export default Inputs;
