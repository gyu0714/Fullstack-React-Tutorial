import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  // const [num, setNum] = useState(0);

  // const getNum = (num) => {
  //   setNum(num);
  // };
  // return (
  //   <div>
  //     <p>여기는 부모입니다 : {num}</p>
  //     <Child num={num} getNum={getNum}></Child>
  //   </div>
  // );

  const [data, setData] = useState(
    'parent data',
  );

  return (
    <>
      <div>{data}</div>
      <Child setData={setData} />
    </>
  );
};

export default Parent;
