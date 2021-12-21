import React, { Component } from 'react';
import {
  Wrap,
  Title,
  Content,
  IconLeft,
  IconRight,
  IconContainer,
} from './style';
import User from '../../assets/Articles/User.png';

export default class index extends Component {
  render() {
    return (
      <Wrap>
        <Title>What Our Customer Says</Title>
        <Content>
          <Content.UserImg src={User} />
          <Content.Text>
            I like Furniking.com and as compared to other company it's polices
            and customers support is very good easy to reach., also many time
            they unable to delivered. The ultricies are pregnant while the quis
            is suspended. Risus commodo viverra maecenas accumsan lacus vel
            facilisist amet.
          </Content.Text>
          <Content.UserName>Angelina Joly</Content.UserName>
          <Content.Profession>Co-founder</Content.Profession>
        </Content>
        <IconContainer>
          <IconLeft />
        </IconContainer>
        <IconRight />
      </Wrap>
    );
  }
}
