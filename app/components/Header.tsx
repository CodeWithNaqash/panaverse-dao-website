import Image from 'next/image';
import logo from '/public/logo.png';
import Link from 'next/link';
import Container from './Container';

const Header = () => {
  return (
    <Container>
      <header className="flex justify-between bg-white-300 py-2 sticky top-0 items-center">
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
      </header>
    </Container>
  );
};

export default Header;
