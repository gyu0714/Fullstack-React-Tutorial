import React, {
  useContext,
} from 'react';
import { UseContext1 } from './UseContext1';

const Header = () => {
  //   const data = useContext(UseContext1);
  //   console.log(data);
  const { company, setCompany } =
    useContext(UseContext1);

  const changeEnglish = () => {
    setCompany('douzone');
  };

  const changeKorean = () => {
    setCompany('더존');
  };
  return (
    <header
      className="header"
      style={{ color: 'black' }}
    >
      <h1>{company} New Devs</h1>
      <button onClick={changeEnglish}>
        English
      </button>
      <button onClick={changeKorean}>
        Korean
      </button>
    </header>
  );
};

export default Header;
