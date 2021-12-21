import styled from 'styled-components';
import img1 from '../../assets/Offer/img.png';
import img2 from '../../assets/Offer/img2.png';

export const Wrap = styled.div`
  width: 100%;
  height: 354px;
  margin-bottom: 100px;
  font-weight: 500;
`;

Wrap.Title = styled.div`
  width: 100%;
  height: 105px;
  font-size: 36px;
  display: flex;
  justify-content: center;
`;
Wrap.CardWrapper = styled.div`
  width: 100%;
  height: 249px;
  display: flex;
`;

Wrap.Card = styled.div`
  width: 50%;
  height: 100%;
  cursor: pointer;
  background-image: url(${({ right }) => (right ? img1 : img2)});
  background-repeat: no-repeat;
  margin-right: ${({ right }) => right && '15px'};
  margin-left: ${({ right }) => (right ? '0' : '15px')};
`;

Wrap.CardTitle = styled.div`
  color: #555555;
  font-size: 25px;
`;

Wrap.CardText = styled.div`
  width: 227px;
  height: 38px;
  font-size: 12px;
  color: #757575;
  margin-top: 11px;
`;
Wrap.TitleWrap = styled.div`
  margin: 28px 0 0 24px;
`;

Wrap.Price = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

Wrap.PriceText = styled.div`
  color: ${({ through }) => (through ? '#CCCCCC' : '#7AC751')};
  font-size: 20px;
  font-weight: 500;
  margin-left: ${({ through }) => through && '12px'};
  text-decoration: ${({ through }) => through && 'line-through'};
`;

Wrap.Btn = styled.button`
  width: 91px;
  height: 26px;
  color: white;
  background-color: #7ac751;
  padding: 5px;
  border: none;
  border-radius: 2px;
  margin-left: 29px;
`;

Wrap.Circle = styled.div`
  display: flex;
  gap: 17px;
`;

Wrap.CircleChild = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  margin-top: 31px;
  background-color: #7ac751;
`;

Wrap.CircleText = styled.div`
  margin: auto;
  margin-top: ${({ small }) => (small ? '0px' : '7px')};

  font-size: ${({ small }) => (small ? '10px' : '15px')};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
