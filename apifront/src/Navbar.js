import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        AnnetaNail Ilusalong
      </Link>
      <ul>
        <CustomLink to="/tooted">Teenused</CustomLink>
        <CustomLink to="/meistrid">Meistrid</CustomLink>
        <CustomLink to="/broneering">Broneering</CustomLink>
        <CustomLink to="/signin">Logi sisse</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
