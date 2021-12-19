import styled from 'styled-components';
import { ReactComponent as Star } from '../../assets/Prooducts/ratings.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
`;

/*-------- TEXT STYLES -----  */

export const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

Text.Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  text-transform: uppercase;
  margin-bottom: 45px;
`;

Text.Values = styled.div`
  display: flex;
  gap: 70px;
  margin-bottom: 73px;
  font-weight: 500;
`;

Text.Value1 = styled.div`
  font-size: 24px;
  line-height: 30px;
  color: #7ac751;
`;

Text.Value2 = styled.div`
  font-size: 24px;
  line-height: 30px;
  color: #c2c2c2;
`;
/*-------- TEXT STYLES END -----  */

/*-------- MAIN CONTENT -----  */
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Card = styled.div`
  margin: 22px 0;
  width: 100%;
`;
Card.IMG = styled.img`
  margin-bottom: 15px;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

Card.Name = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.008em;
  text-transform: uppercase;
  color: rgba(117, 117, 117, 0.71);
`;
Card.Feature = styled.div`
  font-weight: normal;
  font-size: 20px;
  line-height: 120%;
  /* or 24px */

  letter-spacing: 0.005em;
`;

Card.Price = styled.div`
  display: flex;
  gap: 10px;
`;

Card.Price1 = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  /* or 22px */

  text-align: center;
  letter-spacing: 0.005em;

  /* Main Color */

  color: #7ac751;
`;
Card.Price2 = styled.del`
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  /* or 22px */

  text-align: center;
  letter-spacing: 0.005em;
  text-decoration-line: line-through;

  color: #cccccc;
`;
Card.Star = styled(Star)`
  margin: 4.5px 0 0 95px;
`;

Card.CardContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
gap: 10px;

`