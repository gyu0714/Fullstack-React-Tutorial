import React from 'react';

const Child = (props) => {
  // const IncreaseNum = () => {
  //   // console.log(props.num);
  //   props.getNum(props.num + 1);
  // };

  // const DecreaseNum = () => {
  //   props.getNum(props.num - 1);
  // };
  return (
    // <div>
    //   <button onClick={IncreaseNum}>+1</button>
    //   <button onClick={DecreaseNum}>-1</button>
    // </div>

    <button
      onClick={() =>
        props.setData('child data')
      }
    >
      send data to parent
    </button>
  );
};

export default Child;
