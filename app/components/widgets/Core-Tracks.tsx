import React from 'react';
import Container from '../Container';
import Button from '../shared/Button';
import Quater from '../shared/Quater';

const CoreTrackData = [
  {
    header: 'Quarter I',
    description: 'CS-101: Object-Oriented Programming using TypeScript',
    number: '1',
  },
  {
    header: 'Quarter II',
    description:
      'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
    number: '2',
  },
  {
    header: 'Quarter III',
    description:
      '$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development',
    number: '3',
  },
];
const CoreTracks = () => {
  const header = 'Core Courses\n (Common in All Specializations):';

  return (
    <section>
      <Container>
        {/* Content */}
        <div className="max-w-screen-sm">
          <h4 className="text-primary text-lg font-semibold mt-4">
            Program of Studies
          </h4>
          <h2 className="text-4xl font-bold whitespace-pre-line">{header}</h2>
          <p className="mt-3 text-lg text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="mt-6">
            <Button text="Read More"></Button>
          </div>
        </div>
        {/* Boxes */}
        <div className="my-10 flex gap-x-4 gap-y-6 flex-col md:flex-row">
          {CoreTrackData.map((item, i) => {
            return (
              <>
                <Quater
                  title={item.header}
                  description={item.description}
                  number={item.number}
                ></Quater>
              </>
            );
            // return (
            //   <>
            //     <div className="border rounded-md px-8 py-16 flex flex-col flex-1 justify-center relative">
            //       <h4 className="font-bold text-lg">{item.title}</h4>
            //       <p className="text-slate-600 mt-2">{item.description}</p>
            //       <div className="absolute top-0 right-10 text-9xl font-bold -z-10 text-gray-200">
            //         {item.number}
            //       </div>
            //     </div>
            //   </>
            // );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CoreTracks;
