import React, { Component } from "react";
import { Wrap } from "./style";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Icon from "../../assets/Footers/sosmed.png";
export default class index extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Logo>
          <Wrap.Logo2>
            <Logo /> Furniking
          </Wrap.Logo2>
          <Wrap.Text>
            Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
          </Wrap.Text>
          <Wrap.Icons>
            <img src={Icon} alt="" />
          </Wrap.Icons>
        </Wrap.Logo>
        <Wrap.Link>
          <Wrap.Container>
            <Wrap.H1>Help</Wrap.H1>
            <Wrap.P>
              Privacy Policy <br />
              Shipping Delivery <br />
              Refund Policy <br />
              Track Your Order
            </Wrap.P>
          </Wrap.Container>
          <Wrap.Container>
            <Wrap.H1>Store</Wrap.H1>
            <Wrap.P>
              Furniture <br />
              Tabble
              <br />
              Sofa
              <br />
              Other
            </Wrap.P>
          </Wrap.Container>
          <Wrap.Container>
            <Wrap.H1>Supports</Wrap.H1>
            <Wrap.P>
              Feedbcak <br />
              Contact us <br />
              Download app <br />
              Terms conditins
            </Wrap.P>
          </Wrap.Container>
        </Wrap.Link>
      </Wrap>
    );
  }
}
