
import { FaFacebook,FaInstagram, FaYoutube } from 'react-icons/fa';
import './estilo.css';

export default function Footer(){

  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <div className="justify-space-between">
          <div>Domus Inmobilaria</div>
          <div className="social-networks justify-space-between">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  )
}