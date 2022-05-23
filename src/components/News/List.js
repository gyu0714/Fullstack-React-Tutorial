import React from 'react';

const List = ({ name, id, dispatch, confirmed }) => {
  const onRemove = () => {
    dispatch({
      type: 'REMOVE_LIST',
      id: { id },
      //   list: {
      //     id: finalList.lists,
      //   },
    });
  };

  const onUpdate = () => {
    dispatch({
      type: 'CONFIRMED_LIST',
      id: {
        id,
      },
    });
    // console.log(confirmed);
  };
  const falseStyle = {
    color: 'red',
    textDecorationLine: 'line-through',
  };
  const treuStyle = {
    color: 'blue',
  };
  return (
    <div>
      <span style={confirmed ? treuStyle : falseStyle} onClick={onUpdate}>
        {name}
      </span>
      <button onClick={onRemove}>삭제</button>
    </div>
  );
};

export default List;
