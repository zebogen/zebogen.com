import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Navigation = () => {
  const links = [
    { to: "/", label: "home" },
    { to: "/code", label: "code" },
  ];

  return (
    <Nav>
      <NavList>
        {links.map(({ to, label }, index) => (
          <NavListItem key={to}>
            <Link
              to={to}
              activeStyle={{ fontWeight: 'bold', textDecoration: 'none' }}
              partiallyActive={label !== 'home'}
            >
              {label}
            </Link>
            {index < links.length - 1 && <Separator>•</Separator>}
          </NavListItem>
        ))}
      </NavList>
    </Nav>
  );
};

const Nav = styled.nav`

`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavListItem = styled.li`
  font-size: 1.25rem;
  margin: 0;
`;

const Separator = styled.span`
  font-size: 1.5rem;
  margin: 0 .625rem;
  vertical-align: bottom;
`;

export default Navigation;
