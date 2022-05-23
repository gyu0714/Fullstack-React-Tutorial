import React, { useCallback, useState } from 'react';
import Item from './Item';

const UseCallback2 = () => {
  const [size, setSize] = useState(100);

  const createItemStyle = () => {
    console.log(darkMode);
    return {
      backgroundColor: 'gold',
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '100%',
    };
  };

  //   const createItemStyle = useCallback(() => {
  //     return {
  //       backgroundColor: 'gold',
  //       width: `${size}px`,
  //       height: `${size}px`,
  //       borderRadius: '100%',
  //     };
  //   }, [size]);

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? 'black' : 'white',
      }}
    >
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          console.log(size);
          setDarkMode(!darkMode);
        }}
      >
        Drak Mode
      </button>
      <Item createItemStyle={createItemStyle} />
    </div>
  );
};

export default UseCallback2;
