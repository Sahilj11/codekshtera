import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 w-full mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-purple-500">Job<span className="text-gray-300">Seeker</span></h2>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            Your dream job is just a click away! Find the perfect opportunity and boost your career.
          </p>
          <button className="mt-4 px-5 py-2 bg-gradient-to-r from-gray-900 to-gray-800  rounded-full transition  font-semibold text-sm">
            <Link to="/signup">Join Now</Link>
          </button>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-300 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-zinc-400 transition">Home</Link></li>
            <li><Link to="/apply-jobs" className="hover:text-zinc-400 transition">Apply Jobs</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-300 mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition text-xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition text-xl"><FaLinkedin /></a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition text-xl"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-gray-500 text-sm text-center border-t border-gray-700 pt-4">
        © 2025 JobPortal. All Rights Reserved. | <Link to="/terms" className="hover:text-gray-300 transition">Terms & Conditions</Link>
      </div>
    </footer>
  );
};

export default Footer;
