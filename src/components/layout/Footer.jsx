// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import Container from './Container';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const navigation = {
  solutions: [
    { name: 'SEO Services', href: '/services/seo' },
    { name: 'CRM Development', href: '/services/crm' },
    { name: 'Mobile Apps', href: '/services/mobile' },
    { name: 'Custom Solutions', href: '/services/custom' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ],
  contacts: [
    { name: '1 C Satyam Apartment, Vishwas Colony Alkapuri, Vadodara - 390007', href: null },
    { name: 'Phone: 9638544455', href: 'tel:9638544455' },
    { name: 'Email: support@anantsoftcomputing.com', href: 'mailto:support@anantsoftcomputing.com' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/anantsoftcomputing/',
      icon: () => (
        <FaFacebook />
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/anantsoftcomputing/',
      icon: () => (
        <FaInstagram />
      ),
    },
    {
      name: 'Google',
      href: 'https://www.google.com/maps/place/Anant+Soft+Computing/@22.3094348,73.1713566,17z/data=!3m1!4b1!4m6!3m5!1s0x395fc5873e594259:0xda3dc91c20f4beec!8m2!3d22.3094348!4d73.1713566!16s%2Fg%2F11bw1ylpm3?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D',
      icon: () => (
        <FaLocationDot />
      ),
    },
  ],
};

const Footer = () => {

  return (
    <footer className="bg-white border-t border-gray-200" aria-labelledby="footer-heading">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary">Anant&nbsp;</span>
                <span className="text-2xl font-light text-gray-800"> Soft Computing</span>
              </Link>
              <p className="text-gray-600 text-base">
                Transforming businesses through innovative software solutions and digital excellence.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Solutions</h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="text-base text-gray-600 hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-semibold text-gray-900">Company</h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="text-base text-gray-600 hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-1 md:gap-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Support</h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.contacts.map((item) => (
                      <li key={item.name}>
                        {item.href ? (
                          <Link
                            to={item.href}
                            className="text-base text-gray-600 hover:text-primary"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <span className="text-base text-gray-600">{item.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} Anant Soft Computing. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;