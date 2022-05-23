import React, { useEffect, useState, useMemo } from 'react';

const UseMemo2 = () => {
  const [number, setNumber] = useState(1);
  const [onVacation, setOnVacation] = useState(true);

  const mySchedule = onVacation ? '휴가중' : '업무중';

  // const mySchedule = {
  //   status: onVacation ? '휴가중' : '업무중',
  // };

  // const mySchedule = useMemo(() => {
  //   return {
  //     status: onVacation ? '휴가중' : '업무중',
  //   };
  // }, [onVacation]);

  useEffect(() => {
    console.log('---useEffect--');
    console.log(mySchedule);
  }, [mySchedule]);

  const changeNumber = (e) => {
    console.log(onVacation);
    setNumber(e.target.value);
  };

  const changeVacation = () => {
    console.log(number);
    setOnVacation(!onVacation);
  };

  return (
    <div>
      <h2>나의 작고 소중한 잔돈</h2>
      <input type="number" value={number} onChange={changeNumber} />
      <hr />

      <h2>휴가가고싶다</h2>
      <span>상태: {mySchedule}</span>
      <button onClick={changeVacation}> 휴가가즈아 </button>
    </div>
  );
};

export default UseMemo2;
