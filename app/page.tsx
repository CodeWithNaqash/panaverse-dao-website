import Image from 'next/image';
import Hero from './components/widgets/Hero';
import CoreTracks from './components/widgets/Core-Tracks';
import SpecializedTracks from './components/widgets/SpecializedTracks';
import ProgramOutcome from './components/widgets/ProgramOutcome';
// import { Inter } from 'next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Core Track Section */}
        <CoreTracks />
        {/* Specialized Tracks */}
        <SpecializedTracks />
        {/* Outcome section */}
        <ProgramOutcome />
      </main>
    </>
  );
}
