import React, { useState } from 'react';

const Storage = () => {
  const [name, setName] = useState('');
  const [check, setCheck] = useState(false);

  const onChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const saveName = () => {
    const user = {
      name: name,
    };
    window.localStorage.setItem('key1', name);
    window.localStorage.setItem('key2', user);
    window.localStorage.setItem('key3', JSON.stringify(user));
  };

  const loadName = () => {
    setCheck(true);
    // window.localStorage.clear();
  };
  return (
    <div>
      <input name="name" placeholder="이름을 입력하시오" onChange={onChange} />
      <button onClick={saveName}>저장</button>
      <button onClick={loadName}>요청</button>
      {check ? <p>{window.localStorage.getItem('key1')}</p> : <></>}
    </div>
  );
};

export default Storage;
