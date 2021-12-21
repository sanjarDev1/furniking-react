import React, { Component } from 'react';
import { Wrap, Main, Text } from './style';

export default class index extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Title>Our Latest Articles</Wrap.Title>
        <Main>
          <Main.Content1>
            <Text>
              <Text.Top>
                <Text.Logo />
                <Text.Date>23 September 2022</Text.Date>
              </Text.Top>
              <Text.Title>Begineer guide buying minimal sofa</Text.Title>
              <Text.Link>Read more</Text.Link>
            </Text>
          </Main.Content1>
          <Main.Content2>
            <Text>
              <Text.Top>
                <Text.Logo />
                <Text.Date>23 September 2022</Text.Date>
              </Text.Top>
              <Text.Title>Buying best minimal computer table</Text.Title>
              <Text.Link>Read more</Text.Link>
            </Text>
          </Main.Content2>
        </Main>
        <Main>
          <Main.Content3>
            <Text>
              <Text.Top>
                <Text.Logo />
                <Text.Date>22 March 2022</Text.Date>
              </Text.Top>
              <Text.Title>How to choose best modern bench</Text.Title>
              <Text.Link>Read more</Text.Link>
            </Text>
          </Main.Content3>
          <Main.Content4>
            <Text>
              <Text.Top>
                <Text.Logo />
                <Text.Date>04 January 2022</Text.Date>
              </Text.Top>
              <Text.Title>Best Summer Outfit Style in this Country</Text.Title>
              <Text.Link>Read more</Text.Link>
            </Text>
          </Main.Content4>
        </Main>
      </Wrap>
    );
  }
}
