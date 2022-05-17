import React from 'react';

const Hello = ({ name, color, important }) => {
  // console.log(name, color, important);
  console.log(!{ important });

  return (
    <div style={{ color }}>
      {/* {important ? "!!" : null} */}
      {important && '!!'}
      Hello, {name}
    </div>
  );
};

Hello.defaultProps = {
  name: 'React',
};

export default Hello;
