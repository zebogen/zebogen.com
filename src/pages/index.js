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
  margin-top: 4rem;
  text-decoration: underline;
`;

const Subheading = styled.p`
  font-size: 24px;
  font-style: italic;
`;

export default IndexPage
