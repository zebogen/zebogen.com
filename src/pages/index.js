import React from 'react'
import styled from 'styled-components';
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Heading>zebogen</Heading>
    <Subheading>a.k.a Matt Bogen</Subheading>
  </Layout>
)

const Heading = styled.h1`
  text-decoration: underline;
`;

const Subheading = styled.h3`
  font-style: italic;
`;

export default IndexPage
