import React, {
  useContext,
} from 'react';
import { UseContext1 } from './UseContext1';

const Articles = () => {
  const { company } = useContext(
    UseContext1,
  );
  return (
    <article
      className="article"
      style={{ color: 'black' }}
    >
      <h3>
        {company}에 오신것을 환영합니다
      </h3>
    </article>
  );
};

export default Articles;
