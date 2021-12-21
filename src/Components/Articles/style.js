import styled from 'styled-components';
import Photo1 from '../../assets/Articles/Photo1.png';
import Photo2 from '../../assets/Articles/Photo2.png';
import Photo3 from '../../assets/Articles/Photo3.png';
import Photo4 from '../../assets/Articles/Photo4.png';
import { ReactComponent as Logo } from '../../assets/Articles/Tag.svg';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 115px;
  justify-content: center;
  align-items: center;
  margin-bottom: 124px;
`;
Wrap.Title = styled.div`
  width: 410px;
  height: 51px;
  /* H2 */
  font-size: 36px;
  line-height: 45px;
  text-transform: uppercase;
  margin-bottom: 56.6px;
`;

export const Main = styled.div`
  display: flex;
  gap: 26.6px;
  margin-bottom: 22px;
`;

Main.Content1 = styled.div`
  background-image: url(${Photo1});
  background-size: 100% 100%;
  width: 569.75px;
  height: 455.28px;
`;

Main.Content2 = styled.div`
  background-image: url(${Photo2});
  background-size: 100% 100%;
  width: 569.75px;
  height: 455.28px;
`;

Main.Content3 = styled.div`
  background-image: url(${Photo3});
  background-size: 100% 100%;
  width: 569.75px;
  height: 455.28px;
`;

Main.Content4 = styled.div`
  background-image: url(${Photo4});
  background-size: 100% 100%;
  width: 569.75px;
  height: 455.28px;
`;

export const Text = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-top: 252px;
  margin-left: 44px;
`;

Text.Top = styled.div`
  display: flex;
  align-items: center;
  gap: 8.5px;
  margin-bottom: 20px;
`;

Text.Logo = styled(Logo)`
  width: 99.6px;
  height: 23.96px;
`;
Text.Date = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.008em;
`;

Text.Title = styled.div`
  width: 80%;
  height: 75.88px;
  font-size: 39px;
  letter-spacing: 0.005em;
  margin-bottom: 37px;
`;

Text.Link = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.008em;
`;
