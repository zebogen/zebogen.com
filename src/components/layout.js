import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Navigation from './navigation';

import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <GlobalStyle />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <Heading>
            <HeadingText>zebogen</HeadingText>
            <Navigation />
          </Heading>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const GlobalStyle = createGlobalStyle`
  body {
    a {
      transition: color .2s cubic-bezier(0.075, 0.82, 0.165, 1);

      &, &:visited {
        color: black;
      }

      &:hover {
        color: #043a1f;
      }
    }
  }
`;

const HeadingText = styled.h1`
  border: 2px solid #043a1f;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  margin-right: 1.25rem;
  padding: .25rem 1rem .5rem;
`;

const Heading = styled.div`
  align-items: center;
  display: flex;
  margin: 1.5rem 0;
`;

export default Layout
