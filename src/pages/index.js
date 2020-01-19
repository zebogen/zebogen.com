import React from 'react'
import styled from 'styled-components';
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Subheading>Hi, I'm Matt Bogen. I'm a software engineer based in NYC.</Subheading>
  </Layout>
);

const Subheading = styled.p`
  font-size: 24px;
`;

export default IndexPage
