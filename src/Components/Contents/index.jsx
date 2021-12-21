import React, { useState } from "react";
import { Wrap,  ChairWrapper } from "./style";
import Data from "./mock/data.js"
import img1 from "../../assets/section/Rectangle1.png";
import img2 from "../../assets/section/Rectangle2.png";
import img3 from "../../assets/section/Rectangle3.png";
const Style = () => {
  
  const [state, setState] = useState(0);

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
            
              <img style={{  width: "354px", cursor: 'pointer'}} src={Data[state] } alt="" />

          </Wrap.ContainerWrap>
          <Wrap.ContainerWrap column>
            <ChairWrapper>
              <ChairWrapper.ImgWrap>
                <img src={img1} style={{ cursor: 'pointer'}} onClick={()=>setState(1)} alt="" />
              </ChairWrapper.ImgWrap>
              <ChairWrapper.Title>Office Desk Chair</ChairWrapper.Title>
              <ChairWrapper.Cost>$120</ChairWrapper.Cost>
            </ChairWrapper>
            <ChairWrapper>
              <ChairWrapper.ImgWrap>
                <img src={img2} style={{ cursor: 'pointer'}} onClick={()=>setState(2)} alt="" />
              </ChairWrapper.ImgWrap>
              <ChairWrapper.Cost>$180</ChairWrapper.Cost>
              <ChairWrapper.Title>Home Alisa Sofa</ChairWrapper.Title>
            </ChairWrapper>
            <ChairWrapper>
              <ChairWrapper.ImgWrap >
                <img src={img3} style={{ cursor: 'pointer'}} onClick={()=>setState(3)} alt="" />
              </ChairWrapper.ImgWrap>
              <ChairWrapper.Title>Modern Chair</ChairWrapper.Title>
              <ChairWrapper.Cost>$250</ChairWrapper.Cost>
            </ChairWrapper>
          </Wrap.ContainerWrap>
        </Wrap.Container>
      </Wrap>
    );
  }


export default Style;
