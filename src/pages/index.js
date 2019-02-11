import React from 'react';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Lel from '../components/lel';;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `blog`, `machine learning`, `lennard gerdes`, `lennard`]} />
    <Lel />
  </Layout>
)

export default IndexPage
