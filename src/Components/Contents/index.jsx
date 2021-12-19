import React, { Component } from "react";
import { Wrap, Sofa, ChairWrapper } from "./style";
import Chair3 from "../../assets/section/Rectangle3.png";
import Chair1 from "../../assets/section/Rectangle1.png";
import Chair2 from "../../assets/section/Rectangle 2.png";

class index extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Container>
          <Wrap.ContainerWrap>
            <Wrap.Top>TOP COLLECTIONS 2022</Wrap.Top>
            <Wrap.Title>We Serve Your Dream Furniture</Wrap.Title>
            <Wrap.Products>Get 50% off all products</Wrap.Products>
            <Wrap.Btn>SHOP NOW</Wrap.Btn>
          </Wrap.ContainerWrap>
          <Wrap.ContainerWrap>
            <Sofa></Sofa>
          </Wrap.ContainerWrap>
          <Wrap.ContainerWrap column>
            <ChairWrapper>
              <ChairWrapper.ImgWrap>
                <img src={Chair1} alt="" />
              </ChairWrapper.ImgWrap>
              <ChairWrapper.Title>Office Desk Chair</ChairWrapper.Title>
              <ChairWrapper.Cost>$120</ChairWrapper.Cost>
            </ChairWrapper>
            <ChairWrapper>
              <ChairWrapper.ImgWrap>
                <img src={Chair2} alt="" />
              </ChairWrapper.ImgWrap>
              <ChairWrapper.Cost>$180</ChairWrapper.Cost>
              <ChairWrapper.Title>Home Alisa Sofa</ChairWrapper.Title>
            </ChairWrapper>
            <ChairWrapper>
              <ChairWrapper.ImgWrap>
                <img src={Chair3} alt="" />
              </ChairWrapper.ImgWrap>
              <ChairWrapper.Title>Modern Chair</ChairWrapper.Title>
              <ChairWrapper.Cost>$250</ChairWrapper.Cost>
            </ChairWrapper>
          </Wrap.ContainerWrap>
        </Wrap.Container>
      </Wrap>
    );
  }
}

export default index;
