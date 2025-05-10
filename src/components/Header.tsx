import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Upload
            </Link>
          </li>
          <li>
            <Link to="/camera" className="text-gray-700 hover:text-gray-900">
              Camera
            </Link>
          </li>
          <li>
            <Link to="/history" className="text-gray-700 hover:text-gray-900">
              History
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;