import React, { Component } from "react";
import { Wrap } from "./style";

class index extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Title>SPECIAL OFFER</Wrap.Title>
        <Wrap.CardWrapper>
          <Wrap.Card right>
            <Wrap.TitleWrap>
              <Wrap.CardTitle>Living Room Furniture</Wrap.CardTitle>
              <Wrap.CardText>
                You don't have a chair. Are you ready for growth? Shop with us
                40% discount!
              </Wrap.CardText>
              <Wrap.Price>
                <Wrap.PriceText>$150</Wrap.PriceText>
                <Wrap.PriceText through>$250</Wrap.PriceText>
                <Wrap.Btn>SHOP NOW</Wrap.Btn>
              </Wrap.Price>
              <Wrap.Circle>
                <Wrap.CircleChild>
                  <Wrap.CircleText>10</Wrap.CircleText>
                  <Wrap.CircleText small>Days</Wrap.CircleText>
                </Wrap.CircleChild>
                <Wrap.CircleChild>
                  <Wrap.CircleText>15</Wrap.CircleText>
                  <Wrap.CircleText small>HRS</Wrap.CircleText>
                </Wrap.CircleChild>
                <Wrap.CircleChild>
                  <Wrap.CircleText>30</Wrap.CircleText>
                  <Wrap.CircleText small>MIN</Wrap.CircleText>
                </Wrap.CircleChild>
                <Wrap.CircleChild>
                  <Wrap.CircleText>22</Wrap.CircleText>
                  <Wrap.CircleText small>SECS</Wrap.CircleText>
                </Wrap.CircleChild>
              </Wrap.Circle>
            </Wrap.TitleWrap>
          </Wrap.Card>
          <Wrap.Card>
          <Wrap.TitleWrap>
              <Wrap.CardTitle>Modern chair</Wrap.CardTitle>
              <Wrap.CardText>
              Hot chairs of the modern era are now available in our stock.</Wrap.CardText>
              <Wrap.Price>
                <Wrap.PriceText>$75</Wrap.PriceText>
                <Wrap.PriceText through>$150</Wrap.PriceText>
                <Wrap.Btn>SHOP NOW</Wrap.Btn>
              </Wrap.Price>
              <Wrap.Circle>
                <Wrap.CircleChild>
                  <Wrap.CircleText>15</Wrap.CircleText>
                  <Wrap.CircleText small>Days</Wrap.CircleText>
                </Wrap.CircleChild>
                <Wrap.CircleChild>
                  <Wrap.CircleText>08</Wrap.CircleText>
                  <Wrap.CircleText small>HRS</Wrap.CircleText>
                </Wrap.CircleChild>
                <Wrap.CircleChild>
                  <Wrap.CircleText>20</Wrap.CircleText>
                  <Wrap.CircleText small>MIN</Wrap.CircleText>
                </Wrap.CircleChild>
                <Wrap.CircleChild>
                  <Wrap.CircleText>12</Wrap.CircleText>
                  <Wrap.CircleText small>SECS</Wrap.CircleText>
                </Wrap.CircleChild>
              </Wrap.Circle>
            </Wrap.TitleWrap>
          </Wrap.Card>
        </Wrap.CardWrapper>
      </Wrap>
    );
  }
}

export default index;
