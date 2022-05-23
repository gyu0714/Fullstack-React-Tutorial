import React, { useReducer, useState, useRef } from 'react';
import List from './List';

const reducer = (state, action) => {
  //   console.log(action.confirmed.confirmed);
  //   console.log(state.lists);
  switch (action.type) {
    case 'ADD_LIST':
      //   console.log(state.lists);
      //   console.log(action.list.id);
      const name = action.list.name;
      const newList = {
        id: action.list.id,
        name,
        confirmed: true,
      };
      return {
        count: state.count + 1,
        lists: [...state.lists, newList],
      };
    case 'REMOVE_LIST':
      //   console.log(state.lists);
      //   console.log(action.id.id);
      return {
        count: state.count - 1,
        lists: state.lists.filter(
          (list) => list.id !== action.id.id,
          //   console.log(list.id);
          //   console.log(action.id);
        ),
      };
    case 'CONFIRMED_LIST':
      console.log(state.lists);
      console.log(action.id);
      //   const falseList = {
      //     id: action.list.id,
      //     name,
      //     confirmed: false,
      //   };
      return {
        count: state.count,
        lists: state.lists.map(
          (list) => {
            if (action.id.id === list.id) {
              return { ...list, confirmed: !list.confirmed };
            }
            return list;
          },
          // list.confirmed === action.confirmed.confirmed ? falseList : newList,
        ),
      };
    default:
      return state;
  }
};

const initialList = {
  count: 1,
  lists: [
    {
      id: 1,
      name: 'ramen',
      confirmed: true,
    },
    {
      id: 2,
      name: 'ricenoodle',
      confirmed: true,
    },
  ],
};

function UseReducer2() {
  const [list, setList] = useState();
  const nextId = useRef(2);
  const [finalList, dispatch] = useReducer(reducer, initialList);
  //   console.log(finalList);
  console.log(initialList);

  const onCreate = () => {
    dispatch({
      type: 'ADD_LIST',
      list: {
        id: (nextId.current += 1),
        name: list,
      },
    });
  };
  //   console.log(finalList.lists);

  return (
    <div>
      <h2>물품 리스트</h2>
      <p>총 물품수 : {finalList.count} 개</p>
      <input
        type="text"
        placeholder="물품을 입력하세요"
        onChange={(e) => setList(e.target.value)}
      />
      <button onClick={onCreate}>추가</button>
      {finalList.lists.map((list) => {
        // console.log(list);
        // return <p key={list.id}>{list.name}</p>;
        return (
          <List
            key={list.id}
            name={list.name}
            id={list.id}
            dispatch={dispatch}
            confirmed={list.confirmed}
          />
        );
      })}
    </div>
  );
}

export default UseReducer2;
