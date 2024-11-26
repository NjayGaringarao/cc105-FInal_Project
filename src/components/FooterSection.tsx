"use client";

export default function FooterSection() {
  return (
    <footer className="bg-panel h-auto w-screen flex flex-col items-center py-12 px-8 text-gray-200">
      {/* Top Section with Links */}
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* About Us Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-100 mb-4">About Us</h2>
          <p className="text-sm text-gray-400">
            We are a modern platform committed to delivering high-quality
            services and solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-gray-100 mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white transition">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="text-lg font-semibold text-gray-100 mb-4">
            Newsletter
          </h2>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-gray-800 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-primary rounded hover:bg-secondary transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-gray-100 mb-4">Contact</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <span className="font-semibold">Address:</span> 123 Main Street,
              City
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +1 (123) 456-7890
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:info@example.com" className="hover:text-white">
                info@example.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Separator */}
      <div className="w-full max-w-6xl border-t border-gray-700 mt-8"></div>

      {/* Bottom Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-white transition">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
