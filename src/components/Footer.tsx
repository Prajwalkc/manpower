import { Phone, Mail, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ips-neutral-900 text-white py-12 md:py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">
              IPS <span className="text-ips-blue">Manpower</span>
            </h3>
            <p className="text-ips-neutral-200 text-base leading-relaxed">
              One of the leading manpower agencies in Nepal with over 20 years
              of experience in connecting skilled professionals with global
              opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="text-ips-neutral-200 hover:text-ips-blue transition-colors duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-ips-neutral-200 hover:text-ips-blue transition-colors duration-300"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-ips-neutral-200 hover:text-ips-blue transition-colors duration-300"
                >
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-ips-neutral-200 hover:text-ips-blue transition-colors duration-300"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-ips-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="text-ips-neutral-200 text-sm">Phone</p>
                  <a
                    href="tel:+977981885955"
                    className="text-white hover:text-ips-blue transition-colors duration-300"
                  >
                    +977 9849300184
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-ips-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="text-ips-neutral-200 text-sm">Email</p>
                  <a
                    href="mailto:ipservices424@gmail.com"
                    className="text-white hover:text-ips-blue transition-colors duration-300"
                  >
                    ipservices424@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-ips-blue flex-shrink-0 mt-1"
                />
                <div>
                  <p className="text-ips-neutral-200 text-sm">Address</p>
                  <address className="text-white not-italic">
                    Kathmandu, Nepal
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-3">
              <li className="text-ips-neutral-200">
                <span className="text-white font-medium">Mon - Fri:</span> 9:00
                AM - 6:00 PM
              </li>
              <li className="text-ips-neutral-200">
                <span className="text-white font-medium">Saturday:</span> 9:00
                AM - 2:00 PM
              </li>
              <li className="text-ips-neutral-200">
                <span className="text-white font-medium">Sunday:</span> Closed
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-ips-neutral-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-ips-neutral-200 text-sm mb-4 md:mb-0">
              © {currentYear} IPS Manpower. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
