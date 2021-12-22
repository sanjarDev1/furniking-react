import React, { Component } from 'react';
import { Wrapper, Text, Container, Card, CardText, Buttons } from './style';

import Chair9 from '../../assets/section/Chair3.png';
import Chair10 from '../../assets/Prooducts/Chair10.png';
import Chair11 from '../../assets/Prooducts/Chair11.png';
import Chair12 from '../../assets/Prooducts/Chair12.png';
import Chair13 from '../../assets/Prooducts/Chair13.png';
import Chair14 from '../../assets/Prooducts/Chair14.png';
import Chair15 from '../../assets/Prooducts/Chair15.png';
import Chair16 from '../../assets/Prooducts/Chair16.png';
import Hover from '../../assets/Prooducts/Hover.png';


export default class Products2 extends Component {
  render() {
    return (
      <Wrapper>
        <Text>
          <Text.Title>Our Products</Text.Title>
          <Text.Values>
            <Text.Value1>All Products</Text.Value1>
            <Text.Value2>Best Seller</Text.Value2>
            <Text.Value2>New Arrivals</Text.Value2>
            <Text.Value2>Today Deals</Text.Value2>
          </Text.Values>
        </Text>
        <Container>
          <Card.CardContainer>
            <Card>
              <Card.ImgWrap>
               <Card.IMG src={Chair9}>
              </Card.IMG>
              <Card.Hovered className="active">
                <img src={Hover} alt="" />
              </Card.Hovered>
              </Card.ImgWrap>
              <CardText>
                <Card.Name>Chair</Card.Name>
                <Card.Feature>Minimal LCD chair</Card.Feature>
                <Card.Price>
                  <Card.Price1>$180</Card.Price1>
                  <Card.Price2>$250</Card.Price2>
                  <Card.Star />
                </Card.Price>
              </CardText>
            </Card>

            <Card>
            <Card.ImgWrap>
               <Card.IMG src={Chair10}>
              </Card.IMG>
              <Card.Hovered className="active">
                <img src={Hover} alt="" />
              </Card.Hovered>
              </Card.ImgWrap>
              <CardText>
                <Card.Name>Sofa</Card.Name>
                <Card.Feature>Modern Sofa</Card.Feature>
                <Card.Price>
                  <Card.Price1>$120</Card.Price1>
                  <Card.Price2>$250</Card.Price2>
                  <Card.Star />
                </Card.Price>
              </CardText>
            </Card>

            <Card>
            <Card.ImgWrap>
               <Card.IMG src={Chair11}>
              </Card.IMG>
              <Card.Hovered className="active">
                <img src={Hover} alt="" />
              </Card.Hovered>
              </Card.ImgWrap>
              <CardText>
                <Card.Name>Sofa</Card.Name>
                <Card.Feature>Microfiber Sofa</Card.Feature>
                <Card.Price>
                  <Card.Price1>$130</Card.Price1>
                  <Card.Price2>$150</Card.Price2>
                  <Card.Star />
                </Card.Price>
              </CardText>
            </Card>
            <Card>
            <Card.ImgWrap>
               <Card.IMG src={Chair12}>
              </Card.IMG>
              <Card.Hovered className="active">
                <img src={Hover} alt="" />
              </Card.Hovered>
              </Card.ImgWrap>
              <CardText>
                <Card.Name>Table</Card.Name>
                <Card.Feature>Wood Coffee Tables</Card.Feature>
                <Card.Price>
                  <Card.Price1>$130</Card.Price1>
                  <Card.Price2>$150</Card.Price2>
                  <Card.Star />
                </Card.Price>
              </CardText>
            </Card>
          </Card.CardContainer>
          <Card.CardContainer>
            <Card>
            <Card.ImgWrap>
               <Card.IMG src={Chair13}>
              </Card.IMG>
              <Card.Hovered className="active">
                <img src={Hover} alt="" />
              </Card.Hovered>
              </Card.ImgWrap>
              <CardText>
                <Card.Name>Chair</Card.Name>
                <Card.Feature>Acacia Wood Club Chairs</Card.Feature>
                <Card.Price>
                  <Card.Price1>$100</Card.Price1>
                  <Card.Price2>$120</Card.Price2>
                  <Card.Star />
                </Card.Price>
              </CardText>
            </Card>

            <Card>
            <Card.ImgWrap>
               <Card.IMG src={Chair14}>
              </Card.IMG>
              <Card.Hovered className="active">
                <img src={Hover} alt="" />
              </Card.Hovered>
              </Card.ImgWrap>
              <CardText>
                <Card.Name>Bench</Card.Name>
                <Card.Feature>Amalia Cowhide Bench</Card.Feature>
                <Card.Price>
                  <Card.Price1>$130</Card.Price1>
                  <Card.Price2>$150</Card.Price2>
                  <Card.Star />
                </Card.Price>
              </CardText>
            </Card>

            <Card>
            <Card.ImgWrap>
               <Card.IMG src={Chair15}>
              </Card.IMG>
              <Card.Hovered className="active">
                <img src={Hover} alt="" />
              </Card.Hovered>
              </Card.ImgWrap>
              <CardText>
                <Card.Name>Storage</Card.Name>
                <Card.Feature>Juno-Hinged Lid Storage</Card.Feature>
                <Card.Price>
                  <Card.Price1>$130</Card.Price1>
                  <Card.Price2>$150</Card.Price2>
                  <Card.Star />
                </Card.Price>
              </CardText>
            </Card>
            <Card>
            <Card.ImgWrap>
               <Card.IMG src={Chair16}>
              </Card.IMG>
              <Card.Hovered className="active">
                <img src={Hover} alt="" />
              </Card.Hovered>
              </Card.ImgWrap>
              <CardText>
                <Card.Name>Room</Card.Name>
                <Card.Feature>Delicia 3 Piece Living Room</Card.Feature>
                <Card.Price>
                  <Card.Price1>$120</Card.Price1>
                  <Card.Price2>$150</Card.Price2>
                  <Card.Star />
                </Card.Price>
              </CardText>
            </Card>
          </Card.CardContainer>
          <Buttons>
            <Buttons.BigButton> Next Pages &rarr;</Buttons.BigButton>
            <Buttons.BtnWrapper>
              <Buttons.Label>Page</Buttons.Label>
              <Buttons.Button1>1</Buttons.Button1>
              <Buttons.Label>of 100</Buttons.Label>
              <Buttons.Button2> &lt; &nbsp; &gt;</Buttons.Button2>
            </Buttons.BtnWrapper>
          </Buttons>
        </Container>
      </Wrapper>
    );
  }
}
