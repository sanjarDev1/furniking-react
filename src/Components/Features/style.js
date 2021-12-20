import styled, { css } from 'styled-components';
import { ReactComponent as Truck } from '../../assets/FeatureIcon/Truck.svg';
import { ReactComponent as Gift } from '../../assets/FeatureIcon/Gitft.svg';
import { ReactComponent as Payment } from '../../assets/FeatureIcon/Payment.svg';
import { ReactComponent as Support } from '../../assets/FeatureIcon/Support.svg';

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 58px;
  margin-top: 60px;
  margin-bottom: 58px;
`;

export const Content = styled.div`
  display: flex;
`;

Content.TruckI = styled(Truck)``;
Content.GiftI = styled(Gift)``;
Content.PayI = styled(Payment)``;
Content.SupportI = styled(Support)``;

export const Text = styled.div`
  margin-left: 15px;
  margin-top: 5px;
`;

Text.Title = styled.div`
  display: block;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  align-items: center;
  color: #555555;
`;

Text.Value = styled.div`
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  align-items: center;
  color: #515151b5;
`;


