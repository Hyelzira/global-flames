

// Sababa dogoggora ijaarsaa "react-icons" irraa ka'e, fakkiiwwan SVG kan keessa guutuu ta'an fayyadamna.
const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 2c2.716 0 3.056.01 4.123.061 1.066.051 1.79.217 2.428.465a4.918 4.918 0 011.772.937c.602.483 1.157 1.038 1.64 1.64.483.638.65 1.362.701 2.428.051 1.067.061 1.407.061 4.123s-.01 3.056-.061 4.123c-.051 1.066-.217 1.79-.465 2.428a4.918 4.918 0 01-.937 1.772c-.483.602-1.038 1.157-1.64 1.64-.638.483-1.362.65-2.428.701-1.067.051-1.407.061-4.123.061s-3.056-.01-4.123-.061c-1.066-.051-1.79-.217-2.428-.465a4.918 4.918 0 01-1.772-.937c-.602-.483-1.157-1.038-1.64-1.64-.483-.638-.65-1.362-.701-2.428C2.01 15.056 2 14.716 2 12s.01-3.056.061-4.123c.051-1.066.217-1.79.465-2.428a4.918 4.918 0 01.937-1.772c.483-.602 1.038-1.157 1.64-1.64.638-.483 1.362-.65 2.428-.701C8.944 2.01 9.284 2 12 2zm0 2.2c-2.614 0-2.924.01-3.951.05a2.766 2.766 0 00-1.854.721c-.55.441-.996.987-1.437 1.537-.367.458-.654 1.026-.721 1.854-.04.81-.05 1.12-.05 3.734s.01 2.924.05 3.951c.067.828.354 1.396.721 1.854.441.55.887.996 1.437 1.437.458.367 1.026.654 1.854.721.81.04 1.12.05 3.734.05s2.924-.01 3.951-.05c.828-.067 1.396-.354 1.854-.721.55-.441.996-.887 1.437-1.437.367-.458.654-1.026.721-1.854.04-.81.05-1.12.05-3.734s-.01-2.924-.05-3.951c-.067-.828-.354-1.396-.721-1.854-.441-.55-.887-.996-1.437-1.437-.458-.367-1.026-.654-1.854-.721C14.924 4.21 14.614 4.2 12 4.2zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2.2c1.55 0 2.8 1.25 2.8 2.8s-1.25 2.8-2.8 2.8-2.8-1.25-2.8-2.8 1.25-2.8 2.8-2.8zm6.5-4.4c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1z"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.872v-6.985h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.23.194 2.23.194v2.46h-1.26c-1.243 0-1.63.77-1.63 1.563V12h2.77l-.44 2.894h-2.33v6.985C18.343 21.128 22 16.991 22 12z"
    />
  </svg>
);

const XTwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.88L4.14 21.75H1.892l7.733-10.218L0 2.25h8.502L13.758 9.47 18.244 2.25zM17.848 19.083L19.6 21.25h-.953l-5.074-6.42L11.75 12h-.84L5.152 2.75h2.15l4.137 5.485L17.848 19.083z"
    />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M19.615 3.19c.148-.25.222-.54.222-.84 0-.3-.074-.59-.222-.84-.148-.25-.348-.45-.6-.6-.25-.148-.54-.222-.84-.222H5.607c-.3 0-.59.074-.84.222-.25.148-.45.35-.6.6-.148.25-.222.54-.222.84 0 .3.074.59.222.84.148.25.35.45.6.6.25.148.54.222.84.222h12.87c.3 0 .59-.074.84-.222.25-.148.45-.35.6-.6zM9 16V8l7 4-7 4zM2 12c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4s-1.79-4-4-4H6c-2.21 0-4 1.79-4 4z"
    />
  </svg>
);


const HomeFooter = () => (
  <footer className="bg-gray-800 text-gray-300 py-12">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 text-left">
      {/* Branding & Mission (GFM YOUTH) */}
      <div>
        <h2 className="text-2xl font-bold text-fuchsia-600 mb-3 tracking-wider">
          GFM YOUTH
        </h2>
        <p className="text-sm leading-relaxed mb-5 text-gray-400">
          Empowering the next generation through faith, skills, and community.
          Building leaders for a brighter future.
        </p>
        <div className="flex space-x-3 text-xl">
          <a
            href="#"
            aria-label="Instagram"
            className="transition duration-300 hover:text-pink-500"
          >
            <InstagramIcon />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="transition duration-300 hover:text-blue-500"
          >
            <FacebookIcon />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="transition duration-300 hover:text-sky-500"
          >
            <XTwitterIcon />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="transition duration-300 hover:text-red-600"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>

      {/* Quick Links (Routes Added Here) */}
      <div>
        <h3 className="font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-purple-500 pl-3">
          Quick Links
        </h3>
        <ul className="space-y-3 text-sm">
          <li>
            <a
              href="/about"
              className="hover:text-fuchsia-700 transition duration-200"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="hover:text-fuchsia-700 transition duration-200"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/reviews"
              className="hover:text-fuchsia-700 transition duration-200"
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="hover:text-fuchsia-700 transition duration-200"
            >
              Our Blog
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-fuchsia-700 transition duration-200"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Programs (Routes intentionally left as #) */}
      <div>
        <h3 className="font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-purple-500 pl-3">
          Programs
        </h3>
        <ul className="space-y-3 text-sm">
          <li>
            <a
              href="#"
              className="hover:text-fuchsia-500 transition duration-200"
            >
              Everything Tech
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-fuchsia-500 transition duration-200"
            >
              Everything Music
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-fuchsia-500 transition duration-200"
            >
              Godly Dating & Relationships
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-fuchsia-500 transition duration-200"
            >
              Everything Education
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-purple-500 pl-3">
          Get in Touch
        </h3>
        <ul className="space-y-3 text-sm">
          <li>
            <p className="font-semibold text-white">EMAIL:</p>
            <a
              href="mailto:houseofoperaworld@gmail.com"
              className="hover:text-fuchsia-500 transition duration-200"
            >
              globalflameyouthcommunity@gmail.com
            </a>
          </li>
          <li>
            <p className="font-semibold text-white">PHONE:</p>
            <a
              href="tel:+234802429018"
              className="hover:text-fuchsia-500 transition duration-200"
            >
              (+234)813 684 8041
            </a>
          </li>
          <li>
            <p className="font-semibold text-white">HOURS:</p>
            Mon - Fri: 9:00 AM - 5:00 PM (EST)
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} **GFM YOUTH**. All rights reserved.
      </p>
    </div>
  </footer>
);

export default HomeFooter;
