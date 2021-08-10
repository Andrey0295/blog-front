import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container-xl position-relative" style={{ top: '10rem' }}>
      {children}
    </div>
  );
};

export default Container;
