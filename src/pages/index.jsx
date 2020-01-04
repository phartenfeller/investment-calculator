import { Link } from 'gatsby';
import React from 'react';
import Calculator from '../components/calculator';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/tailwind.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Calculator />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
