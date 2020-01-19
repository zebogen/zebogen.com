import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const CodePage = () => (
  <Layout>
    <h1>Projects</h1>
    <Link to="/code/conway">Conway's Game of Life</Link>
  </Layout>
);

export default CodePage;
