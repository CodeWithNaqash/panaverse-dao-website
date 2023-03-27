import Image from 'next/image';
import Hero from './components/widgets/Hero';
// import { Inter } from 'next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <Hero />
      </main>
    </>
  );
}
