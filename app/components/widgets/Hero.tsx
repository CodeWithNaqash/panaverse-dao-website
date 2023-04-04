import Container from '../Container';
import Image from 'next/image';
import HeroPoster from '/app/assets/images/hero-poster.png';
import Button from '../shared/Button';

const Hero = () => {
  return (
    <section className="bg-blue-200">
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="flex-1 max-w-lg">
            <h4 className="text-primary text-lg font-semibold mt-4">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-5xl sm:text-5xl font-bold">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
              <br></br>
              <br></br>
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="mt-6">
              <Button text={'Learn More'}></Button>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex-1">
            <Image src={HeroPoster} alt="Hero Poster"></Image>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
