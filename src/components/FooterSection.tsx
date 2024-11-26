"use client";

export default function FooterSection() {
  return (
    <footer className="bg-panel h-auto w-screen flex flex-col items-center py-12 px-8 text-gray-200">
      {/* Top Section with Links */}
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* About This Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-100 mb-4">
            About This
          </h2>
          <p className="text-sm text-lightPanel">
            This is for the purpose of partial-fulfillment in the subject CC105
            - Information Management for the program of Bachelor of Science in
            Computer Science
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-gray-100 mb-4">
            Technology
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://ubuntu.com/"
                className="hover:text-white transition"
              >
                Ubuntu
              </a>
            </li>
            <li>
              <a
                href="https://www.apachefriends.org/"
                className="hover:text-white transition"
              >
                XAMPP
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/"
                className="hover:text-white transition"
              >
                Next JS
              </a>
            </li>
            <li>
              <a
                href="https://www.noip.com/"
                className="hover:text-white transition"
              >
                No-IP
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="text-lg font-semibold text-gray-100 mb-4">
            Source Code
          </h2>
          <span className="font-semibold">Github:</span>{" "}
          <a
            href="https://github.com/NjayGaringarao/cc105-FInal_Project"
            className="hover:text-white"
          >
            cc105-Final_Project
          </a>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-gray-100 mb-4">Contact</h2>
          <ul className="space-y-2 text-sm text-lightPanel">
            <li>
              <span className="font-semibold">Address:</span> San Marcelino,
              Zambales
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +63 956 448 9292
            </li>
            <li>
              <span className="font-semibold">Facebook:</span>{" "}
              <a
                href="https://www.facebook.com/nigel.garingarao"
                className="hover:text-white"
              >
                Jr Garingarao
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Separator */}
      <div className="w-full max-w-6xl border-t border-gray-700 mt-8"></div>

      {/* Bottom Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-300">
        <p>
          &copy; {new Date().getFullYear()} Jr Garingarao. All rights reserved.
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
