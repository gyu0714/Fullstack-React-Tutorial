import React, { useState, useEffect } from 'react';

const Storage = () => {
  const [name, setName] = useState('');
  const [check, setCheck] = useState(false);
  const [data, setData] = useState([]);

  const onChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const saveName = () => {
    const user = {
      name: name,
    };
    // window.localStorage.setItem('key1', name);
    // window.localStorage.setItem('key2', user);
    window.localStorage.setItem('name2', JSON.stringify(user));
  };

  const loadName = () => {
    // setCheck(true);
    // 키를 어떻게 찾아올 수 있을까?
    let showData = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      let key = window.localStorage.key(i);
      let value = window.localStorage.getItem(key);

      if (JSON.parse(value).name === name) {
        showData.push({ key, name });
      }
    }
    setData(showData);
    setCheck(showData.length === 0 ? false : true);
  };

  const resetName = () => {
    window.localStorage.clear();
  };

  useEffect(() => {
    loadName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div>
      <input
        name="name"
        value={name}
        placeholder="이름을 입력하시오"
        onChange={onChange}
      />
      <button onClick={saveName}>저장</button>
      <button onClick={loadName}>요청</button>
      <button onClick={resetName}>초기화</button>
      {/* {check ? <p>{data}</p> : <></>} */}

      {check ? (
        data.map((obj) => {
          return <p key={obj.key}>{obj.name}</p>;
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Storage;
