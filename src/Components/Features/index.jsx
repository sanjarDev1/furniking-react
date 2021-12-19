import React, { Component } from 'react';
import { Content, IconContainer, Text } from './style';

export default class Feature extends Component {
  render() {
    return (
      <IconContainer>
        <Content>
          <Content.TruckI />
          <Text>
            <Text.Title>Free Shipping</Text.Title>
            <Text.Value>Orders Over $100</Text.Value>
          </Text>
        </Content>

        <Content>
          <Content.GiftI />
          <Text>
            <Text.Title>Smart Gift Card</Text.Title>
            <Text.Value>Buy $1000 to get card</Text.Value>
          </Text>
        </Content>

        <Content>
          <Content.PayI />
          <Text>
            <Text.Title>Quick Payment</Text.Title>
            <Text.Value>100% SecurePayment</Text.Value>
          </Text>
        </Content>
        <Content>
          <Content.SupportI />
          <Text>
            <Text.Title>24/7 Support</Text.Title>
            <Text.Value>Quick Support</Text.Value>
          </Text>
        </Content>
      </IconContainer>
    );
  }
}
