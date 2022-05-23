import React, { useReducer, useState } from 'react';

// const reducer = (state, action) => {
//   console.log('--reducer 동작');
//   console.log(state, action);
//   if (action.type === 'BUY') {
//     return state - action.stock;
//   } else if (action.type === 'SELL') {
//     return state + action.stock;
//   } else {
//     return state;
//   }
// };

const ACTION_TYPES = {
  BUY: 'BUY',
  SELL: 'SELL',
};

const reducer = (state, action) => {
  console.log('--reducer 동작');
  console.log(state, action);
  switch (action.type) {
    case ACTION_TYPES.BUY:
      return state - action.stock;
    case ACTION_TYPES.SELL:
      return state + action.stock;
    default:
      return state;
  }
};

function UseReducer() {
  const [number, setNumber] = useState(0);
  const [balance, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>잔액 : {balance} 원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      ></input>
      <br />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.BUY, stock: number });
        }}
      >
        매수
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.SELL, stock: number });
        }}
      >
        매도
      </button>
    </div>
  );
}

export default UseReducer;
