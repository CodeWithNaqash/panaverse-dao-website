import React, { FC } from 'react';

const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-screen-2xl mx-auto px-4">{children}</div>;
};

export default Container;
