import React, { useEffect, useRef } from 'react';

const UseRef4 = () => {
  const inputRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  }, []);

  // 1. 이름 입력
  // 2. 입력 버튼 클릭
  // 3. 입력한 이름이 alert()창에 출력
  // 4. alert()창을 닫으면 다시 input으로 focusing
  const showName = () => {
    console.log(btnRef.current);
    // console.log(inputRef.current.value);
    // alert(inputRef.current.value);
    if (window.confirm('이거 맞나요?')) {
      inputRef.current.focus();
    } else {
      btnRef.current.focus();
    }
  };

  const onReset = () => {
    inputRef.current.value = '';
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="name" />
      <button onClick={showName}>입력</button>
      <button ref={btnRef} onClick={onReset}>
        초기화
      </button>
    </div>
  );
};

export default UseRef4;
