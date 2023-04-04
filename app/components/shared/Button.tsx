import React, { FC } from 'react';

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button className="bg-primary text-white text-lg font-medium px-7 py-4 rounded-full hover:scale-105 hover:shadow-lg duration-500">
      {text}
    </button>
  );
};

export default Button;
