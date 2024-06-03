import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <h1 className="text-2xl font-bold">bydrive</h1>
          </div>
          <address className="not-italic">
            Kutaisi International University<br />
            Kutaisi<br />
            Georgia
          </address>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} width={20} height={20} /></a>
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} width={20} height={20} /></a>
            <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} width={20} height={20} /></a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p>© 2024 All rights reserved WhiteUI.Store</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
