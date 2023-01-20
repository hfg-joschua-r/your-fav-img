import React, { useRef, useState } from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 text-ciYellow">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <ul className="list-reset flex flex-wrap items-center justify-between mb-6 font-sans">
          <li className="mr-3">
            <a
              href="https://linkedin.com/in/joschua-rothenbacher-431448200/"
              className="text-gray-700 hover:text-gray-900 font-bold text-base no-underline"
            >
              LinkedIn
            </a>
          </li>

          <li className="mr-3">
            <a
              href="https://twitter.com/cetaryl_"
              className="text-gray-700 hover:text-gray-900 font-extrabold text-base no-underline"
            >
              Twitter
            </a>
          </li>
          <li className="mr-3">
            <a
              href="https://instagram.com/joschflyboy"
              className="text-gray-700 hover:text-gray-900 font-extrabold text-base no-underline"
            >
              Instagram
            </a>
          </li>
          <li className="ml-6">
            <p className="text-base text-gray-700 font-norma no-underline">
              Copyright 2022
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;