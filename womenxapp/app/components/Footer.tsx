// footer component
import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0 md:pr-12"> {/* Adjusted padding */}
              <h2 className="text-xl font-bold text-pink-600">Contact</h2>
              <h3 className="text-3xl font-bold">Contact Us</h3>
              <p className="mt-4 text-gray-700">
                Contact us at womenxinnovators@gmail.com
                <br />
                or personally at galcaraz@bu.edu and mgors@bu.edu.
              </p>
              <div className="mt-4 flex space-x-4">
                <Link href="https://www.instagram.com" className="text-gray-700 hover:text-pink-600" target="_blank" rel="noopener noreferrer">
                  <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
                </Link>
                <Link href="https://www.linkedin.com" className="text-gray-700 hover:text-pink-600" target="_blank" rel="noopener noreferrer">
                  <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="md:pl-12"> {/* Adjusted padding */}
              <h3 className="text-3xl font-bold">Newsletter</h3>
              <form className="mt-4 flex">
                <input
                  type="email"
                  placeholder="e.g., email@example.com"
                  className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-600 text-white rounded-r-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          {/* <div className="mt-8 flex justify-center">
            <img src="/WXI.png" alt="Womenx Innovators" className="h-12 mr-4" />
          </div> */}
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  
