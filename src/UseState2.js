import React, { useState } from 'react';

const UseState2 = () => {
  let students = ['신현채', '성종헌'];
  const [names, setNames] = useState(students);
  return (
    <div>
      <input type="text"></input>
      <button>Record</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
};

export default UseState2;
