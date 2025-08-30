import React from "react";

const Footer = () => {
  return (
    <footer id="contact-us" className="bg-gray-900 text-gray-300 w-full px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-red-500">Tomato.</h1>
          <p className="leading-relaxed text-gray-400">
            Some dummy text, it is some dummy text you know. Yeah it is so cool
            seeing you perform this way. I really like it.
          </p>
          <div className="flex gap-4 mt-3 cursor-pointer">
            <img
              className="size-9 rounded-full border-2 border-purple-500 shadow-md"
              alt="Facebook"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfbcYeYgf0wQJ-LSPm3CPbyB7T1p0f5bnaA&s"
            />

            <img
              className="size-9 rounded-full border-2 border-purple-500 shadow-md"
              alt="Instagram"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQIanFMRxMB7bQKi0ru5HmGonxyngs0Ve6w&s"
            />

            <img
              className="size-9 rounded-full border-2 border-purple-500 shadow-md"
              alt="LinkedIn"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
            />
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-white">Company</h2>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li className="hover:text-red-400 transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-red-400 transition-colors cursor-pointer">
              About us
            </li>
            <li className="hover:text-red-400 transition-colors cursor-pointer">
              Delivery
            </li>
            <li className="hover:text-red-400 transition-colors cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-white">Get in Touch</h2>
          <p className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer">
            +1-345-3345-573
          </p>
          <p className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer">
            Abay@food-delivery.com
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Tomato. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
