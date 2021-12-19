import React, { Component } from 'react';
import { Img, SmallWrapper, smallWrapper, Wrapper } from './style';

export default class ContentContainer extends Component {
  render() {
    return (
      <Wrapper>
        <Img>
          <Img.Text>
            <Img.Title>Modern Furniture Collections</Img.Title>
            <Img.Value>Starting from $500</Img.Value>
            <Img.Button>Read More &#8594;</Img.Button>
          </Img.Text>
        </Img>
        <SmallWrapper>
          <Img.Small1>
            <Img.Text>
              <Img.Title>Geometric Bookcase</Img.Title>
              <Img.Value>Up to 20% discount</Img.Value>
              <Img.Button>Read More &#8594;</Img.Button>
            </Img.Text>
          </Img.Small1>
          <Img.Small2>
            <Img.Text>
              <Img.Title>Minimal Sofa collections </Img.Title>
              <Img.Value>Sale upto 40% discount</Img.Value>
              <Img.Button>Read More &#8594;</Img.Button>
            </Img.Text>
          </Img.Small2>
        </SmallWrapper>
      </Wrapper>
    );
  }
}
