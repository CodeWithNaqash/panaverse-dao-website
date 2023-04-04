import { FC } from 'react';

const Quater: FC<{
  title: string;
  description: string;
  number: string;
  haveBorder?: boolean;
}> = ({ title, description, number, haveBorder = true }) => {
  return (
    <div
      className={`rounded-md flex-1 px-8 py-12 relative ${
        haveBorder && 'border'
      }`}
    >
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-slate-600 mt-2">{description}</p>
      <div className="absolute top-0 right-10 text-9xl font-bold -z-10 text-gray-200">
        {number}
      </div>
    </div>
  );
};

export default Quater;
