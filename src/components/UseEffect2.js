import React, { useEffect } from 'react';

const UseEffect2 = () => {
  useEffect(() => {
    console.log('작업시작');
    // const work = setInterval(() => {
    //   console.log('작업중');
    // }, 1000);

    return () => {
      console.log('작업종료');
      //   clearInterval(work);
    };
  }, []);

  return (
    <div>
      <span>작업중</span>
    </div>
  );
};

export default UseEffect2;
