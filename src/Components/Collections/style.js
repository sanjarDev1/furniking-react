import styled from 'styled-components';
import big from '../../assets/Discount/Big.png';
import small1 from '../../assets/Discount/Small1.png';
import small2 from '../../assets/Discount/Small2.png';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 120px;
  width: 1172.96px;
  height: 511px;
`;

export const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.div`
  background-image: url(${big});
  background-size: 100% 100%;
  height: 511px;
  width: 800px;
  margin-right: 18.9px;
`;

Img.Small1 = styled.div`
  background-image: url(${small1});
  width: 485px;
  height: 247px;
  background-position: center;
  background-size: 100% 100%;
  margin-bottom: 17px;
`;

Img.Small2 = styled.div`
  background-image: url(${small2});
  width: 485px;
  height: 247px;
  background-position: center;
  background-size: 100% 100%;
`;

Img.Text = styled.div`
  margin: 63px 31px;
`;

Img.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  margin-top: 10px;
`;
Img.Value = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #7ac751;
  margin-top: 10px;
`;

Img.Button = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  margin-top: 13px;
`;
