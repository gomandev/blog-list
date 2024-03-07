import Logo from '../../assets/emerge-logo.svg';
import {Container} from '../Container';

export default function Navbar() {
  return (
    <Container>
      <nav className="navbar flex justify-between items-center bg-white text-black py-[2.31rem]">
        <div className="flex items-center">
          <img src={Logo} alt="Your Logo" />
          <ul className="hidden lg:flex space-x-8 ml-[2.25rem]">
            <li>
              <a href="#" className="text-black text-base font-medium font-['Inter'] leading-normal">Home</a>
            </li>
            <li>
              <a href="#" className="text-black text-base font-medium font-['Inter'] leading-normal">Technologies</a>
            </li>
            <li>
              <a href="#" className="text-black text-base font-medium font-['Inter'] leading-normal">Case Study</a>

            </li>
            <li>
              <a href="#" className="text-black text-base font-medium font-['Inter'] leading-normal">Blog</a>
            </li>
            <li>
              <a href="#" className="text-black text-base font-medium font-['Inter'] leading-normal">Contact Us</a>
            </li>
          </ul>
        </div>

        <button className="button button-sm bg-black h-[50px]">
        Book a Meeting
      </button>
      </nav>
    </Container>
  );
}
