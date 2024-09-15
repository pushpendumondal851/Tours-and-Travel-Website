import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 overflow-hidden">
      
        <div className="grid grid-cols-12 gap-8">
        
          <div className="col-span-12 md:col-span-3 space-y-4">
            <img
              src="/logo.png" 
              alt="Tours India Logo"
              className="w-32 mb-4"
            />
            <address className="not-italic text-sm leading-loose">
              Netaji Colony<br />
              Dunlop, West Bengal 700108<br />
              +91-90076-14192<br />
              <a href="mailto:info@toursindia.com" className="text-white hover:underline">
                info@toursindia.com
              </a>
            </address>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Twitter" className="p-2 bg-white rounded-full text-teal-900 hover:bg-teal-400">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 bg-white rounded-full text-teal-900 hover:bg-teal-400">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9 flex flex-col justify-between">
            {/* Acknowledgment Text */}
            <p className="text-sm leading-loose mb-6">
              Tours India is committed to providing exceptional experiences while respecting and promoting the rich cultural heritage of India. We encourage all travelers explore responsibly and embrace the diversity of our country.
            </p>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
              <div>
                <h3 className="font-semibold text-teal-400 mb-2">EXPERIENCE</h3>
                <ul>
                  <li><a href="#" className="hover:underline">Cultural Tours</a></li>
                  <li><a href="#" className="hover:underline">Adventure Trips</a></li>
                  <li><a href="#" className="hover:underline">Wildlife Safaris</a></li>
                  <li><a href="#" className="hover:underline">Historical Sites</a></li>
                  <li><a href="#" className="hover:underline">Local Festivals</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-teal-400 mb-2">RELAX</h3>
                <ul>
                  <li><a href="#" className="hover:underline">Dining Options</a></li>
                  <li><a href="#" className="hover:underline">Shopping</a></li>
                  <li><a href="#" className="hover:underline">Accommodation</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-teal-400 mb-2">DISCOVER</h3>
                <ul>
                  <li><a href="#" className="hover:underline">Travel Guides</a></li>
                  <li><a href="#" className="hover:underline">Travel Tips</a></li>
                  <li><a href="#" className="hover:underline">Travel Packages</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-teal-400 mb-2">CONNECT</h3>
                <ul>
                  <li><a href="#" className="hover:underline">About Us</a></li>
                  <li><a href="#" className="hover:underline">Contact Us</a></li>
                  <li><a href="#" className="hover:underline">Partner with Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
          <p>© 2024 Tours India. All rights reserved. | <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms And Conditions</a></p>
          <p className="mt-2">Art by Indian Artists | Crafted with <span className="text-red-500">♥</span> by Tours India Team.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
