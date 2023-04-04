import Image from 'next/image';
import logo from '/public/logo.png';
import Link from 'next/link';
import Container from './Container';

const Header = () => {
  return (
    <header className="bg-yellow-100 sticky top-0 z-10">
      <Container>
        <div className="flex justify-between py-2 items-center">
          {/* Logo */}
          <div>
            <Image src={logo} alt="Panavere dao logo"></Image>
          </div>
          {/* Navigation Bar */}
          <ul className="flex space-x-8">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/course'}>Course</Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
