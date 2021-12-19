import React, { Component } from 'react';
import { Wrapper, Text, Container, Card, CardText } from './style';

import Chair1 from '../../assets/Prooducts/Chair1.png';
import Chair2 from '../../assets/Prooducts/Chair2.png';
import Chair3 from '../../assets/Prooducts/Chair3.png';
import Chair4 from '../../assets/Prooducts/Chair4.png';
import Chair5 from '../../assets/Prooducts/Chair5.png';
import Chair6 from '../../assets/Prooducts/Chair6.png';
import Chair7 from '../../assets/Prooducts/Chair7.png';
import Chair8 from '../../assets/Prooducts/Chair8.png';

export default class Products extends Component {
  render() {
    return (
      <Wrapper>
        <Text>
          <Text.Title>Trending</Text.Title>
          <Text.Values>
            <Text.Value1>Top Products</Text.Value1>
            <Text.Value2>New Arrivals</Text.Value2>
            <Text.Value2>Best Seller</Text.Value2>
          </Text.Values>
        </Text>
        <Container>
        <Card.CardContainer>
          <Card>
            <Card.IMG src={Chair1}></Card.IMG>
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
            <Card.IMG src={Chair2}></Card.IMG>
            <CardText>
              <Card.Name>Chair</Card.Name>
              <Card.Feature>Minimal iconic chair</Card.Feature>
              <Card.Price>
                <Card.Price1>$120</Card.Price1>
                <Card.Price2>$150</Card.Price2>
                <Card.Star />
              </Card.Price>
            </CardText>
          </Card>
          <Card>
            <Card.IMG src={Chair3}></Card.IMG>
            <CardText>
              <Card.Name>Chair</Card.Name>
              <Card.Feature>Dining chairs</Card.Feature>
              <Card.Price>
                <Card.Price1>$100</Card.Price1>
                <Card.Price2>$120</Card.Price2>
                <Card.Star />
              </Card.Price>
            </CardText>
          </Card>
          <Card>
            <Card.IMG src={Chair4}></Card.IMG>
            <CardText>
              <Card.Name>Chair</Card.Name>
              <Card.Feature>Buskbo armchair </Card.Feature>
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
            <Card.IMG src={Chair5}></Card.IMG>
            <CardText>
              <Card.Name>Modern Chairs</Card.Name>
              <Card.Feature>Minimal LCD chair</Card.Feature>
              <Card.Price>
                <Card.Price1>$120</Card.Price1>
                <Card.Price2>$160</Card.Price2>
                <Card.Star />
              </Card.Price>
            </CardText>
          </Card>
          <Card>
            <Card.IMG src={Chair6}></Card.IMG>
            <CardText>
              <Card.Name>Chair</Card.Name>
              <Card.Feature>Plastic dining chair</Card.Feature>
              <Card.Price>
                <Card.Price1>$180</Card.Price1>
                <Card.Price2>$250</Card.Price2>
                <Card.Star />
              </Card.Price>
            </CardText>
          </Card>
          <Card>
            <Card.IMG src={Chair7}></Card.IMG>
            <CardText>
              <Card.Name>Chair</Card.Name>
              <Card.Feature>Minimal Wood chair</Card.Feature>
              <Card.Price>
                <Card.Price1>$140</Card.Price1>
                <Card.Price2>$180</Card.Price2>
                <Card.Star />
              </Card.Price>
            </CardText>
          </Card>
          <Card>
            <Card.IMG src={Chair8}></Card.IMG>
            <CardText>
              <Card.Name>Chair</Card.Name>
              <Card.Feature>Elegent wood chair</Card.Feature>
              <Card.Price>
                <Card.Price1>$180</Card.Price1>
                <Card.Price2>$250</Card.Price2>
                <Card.Star />
              </Card.Price>
            </CardText>
          </Card>
          </Card.CardContainer>
        </Container>
      </Wrapper>
    );
  }
}
