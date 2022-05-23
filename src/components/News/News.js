import React from 'react';
import Articles from './Articles';
import Header from './Header';

const News = () => {
  return (
    <div className="news">
      <Header></Header>
      <Articles></Articles>
      {/* <Footer company={company}></Footer> */}
    </div>
  );
};

export default News;
