import React, { Component } from 'react';
import Navbar from '../Navbar';
import SubNav from '../../Components/SubNav';
import { Wrapper } from './style';
import Section from '../../Components/Sections';
import Feature from '../../Components/Features';
import ContentContainer from '../../Components/Collections';
import Products from '../../Components/Products';
import Contents from '../../Components/Contents'
import Products2 from '../../Components/Products/Products2';
import Offer from '../../Components/Offer'
import Footer from "../../Components/Footer"
export default class index extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <SubNav />
        <Wrapper.Section>
          <Section />
        <Contents />
        </Wrapper.Section>
        <Feature />
        <ContentContainer />
        <Products />
        <Offer/>
        <Products2/>
        <Footer />
      </Wrapper>
    );
  }
}
