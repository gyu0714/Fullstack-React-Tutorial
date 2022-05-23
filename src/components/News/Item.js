import React, { useEffect, useState } from 'react';

const Item = ({ createItemStyle }) => {
  const [styleValue, setStyleValue] = useState({});

  useEffect(() => {
    console.log('item update ');
    setStyleValue(createItemStyle);
  }, [createItemStyle]);
  return <div style={styleValue}></div>;
};

export default Item;
