'use client';
import React, { useState } from 'react';
import Container from '../Container';
import Quater from '../shared/Quater';
import Image from 'next/image';
// Images
import AIIm from '/app/assets/images/ai.png';
import CloudIm from '/app/assets/images/cloud.png';
import GenoIm from '/app/assets/images/genomics.png';
import NetIm from '/app/assets/images/network.jpg';
import AmbientIm from '/app/assets/images/ambient.png';
import MetaverseIm from '/app/assets/images/metaverse.png';

const programData = [
  {
    slug: 'wmd',
    header: 'Web 3.0 (Blockchain) and Metaverse Specialization',
    description:
      'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.',
    image: MetaverseIm,
    quaters: [
      {
        header: 'Quarter IV',
        description:
          'W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps',

        number: '4',
      },
      {
        header: 'Quarter V',
        description:
          'MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences',
        number: '5',
      },
    ],
  },
  {
    slug: 'ai',
    header: 'Artificial Intelligence (AI) and Deep Learning Specialization',
    description:
      'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.',
    image: AIIm,
    quaters: [
      {
        header: 'Quarter IV',
        description:
          'AI-351: Developing Planet-Scale Intelligent APIs and Python Programming',
        number: '4',
      },
      {
        header: 'Quarter V',
        description: 'AI-361: Deep Learning and MLOps',
        number: '5',
      },
    ],
  },
  {
    slug: 'cnc',
    header: 'Cloud-Native Computing Specialization',
    description:
      'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.',
    image: CloudIm,

    quaters: [
      {
        header: 'Quarter IV',
        description:
          'CN-351: Certified Kubernetes Application Developer (CKAD)',
        number: '4',
      },
      {
        header: 'Quarter V',
        description:
          'CN-361: Developing Multi-Cloud Apps using CDK for Terraform',
        number: '5',
      },
    ],
  },
  {
    slug: 'aci',
    header: 'Ambient Computing and IoT Specialization',
    description:
      'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.',
    image: AmbientIm,

    quaters: [
      {
        header: 'Quarter IV',
        description:
          'AC-351: Ambient Computing with Voice Assistants and Matter Devices',
        number: '4',
      },
      {
        header: 'Quarter V',
        description: 'AC-361: Embedded Programming using C and Rust',
        number: '5',
      },
    ],
  },
  {
    slug: 'gng',
    header: 'Genomics and Bioinformatics Specialization',
    description:
      'Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.',
    image: GenoIm,

    quaters: [
      {
        header: 'Quarter IV',
        description: 'Bio-351: Python for Biologists',
        number: '4',
      },
      {
        header: 'Quarter V',
        description: 'Bio-361: Bioinformatics with Python',
        number: '5',
      },
    ],
  },
  {
    slug: 'net',
    header: 'Network Programmability and Automation Specialization',
    description:
      'More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.',
    image: NetIm,

    quaters: [
      {
        header: 'Quarter IV',
        description: 'NPA-351: CCNA 200-301 Certification',
        number: '4',
      },
      {
        header: 'Quarter V',
        description: 'NPA-361: Network Programmability and Automation',
        number: '5',
      },
    ],
  },
  {
    slug: 'net',
    header: 'Network Programmability and Automation Specialization',
    description:
      'More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.',
    image: NetIm,

    quaters: [
      {
        header: 'Quarter IV',
        description: 'NPA-351: CCNA 200-301 Certification',
        number: '4',
      },
      {
        header: 'Quarter V',
        description: 'NPA-361: Network Programmability and Automation',
        number: '5',
      },
    ],
  },
  {
    slug: 'net',
    header: 'Network Programmability and Automation Specialization',
    description:
      'More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.',
    image: NetIm,

    quaters: [
      {
        header: 'Quarter IV',
        description: 'NPA-351: CCNA 200-301 Certification',
        number: '4',
      },
      {
        header: 'Quarter V',
        description: 'NPA-361: Network Programmability and Automation',
        number: '5',
      },
    ],
  },
];

const SpecializedTracks = () => {
  const [selectedItem, setSelectedItem]: any = useState('wmd');
  console.log(selectedItem);
  const selectedItemData = programData.find(
    (item) => item.slug === selectedItem
  );

  return (
    <section>
      <Container>
        {/* Header */}
        <div>
          <h4 className="text-4xl font-bold">Specialized Tracks:</h4>
          <p className="mt-3 text-lg text-slate-600">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:{' '}
          </p>
        </div>

        <div className="mt-10 flex flex-col-reverse md:flex-row gap-6">
          {/* Content Left */}
          <div className="self-start sticky top-24 basis-7/12 shadow-xl rounded-xl border border-slate-200 py-8 px-6">
            <h4 className="text-primary text-lg font-semibold mt-4">
              Specialized Program
            </h4>
            <h3 className="text-2xl font-bold">{selectedItemData?.header}</h3>
            <p className="mt-3 text-lg text-slate-600">
              {selectedItemData?.description}
            </p>
            <button className="text-primary underline text-lg mt-4 flex items-center gap-x-2">
              Learn More
              <svg
                className="mt-1"
                width="8"
                height="11"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 ">
              {selectedItemData?.quaters.map((item) => {
                return (
                  <>
                    <Quater
                      title={item.header}
                      description={item.description}
                      number={item.number}
                      haveBorder={false}
                    ></Quater>
                  </>
                );
              })}
            </div>
          </div>

          {/* Content Right */}
          <div className="bg-teal-100 basis-5/12 space-y-4 px-4 py-6">
            {programData.map((item, i) => {
              return (
                <>
                  <div
                    onClick={() => setSelectedItem(item.slug)}
                    key={item.slug}
                    className="flex items-center gap-x-4 cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-40">
                      <Image
                        src={item.image}
                        alt={item.header}
                        className="object-cover rounded-md h-24"
                      ></Image>
                    </div>
                    <div className="bg-gray-200">
                      <h4 className="text-primary">Specialized Program</h4>
                      <h3 className="font-semibold">{item.header}</h3>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SpecializedTracks;
