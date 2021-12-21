import styled from 'styled-components';
import { ReactComponent as Left } from '../../assets/Articles/Left.svg';
import { ReactComponent as Right } from '../../assets/Articles/Right.svg';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 115px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 90px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  width: 816px;
  height: 312px;
  background: #f8fafb;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;
Content.UserImg = styled.img`
  width: 88px;
  height: 88px;
  margin-top: -47px;
  /* position: absolute; 
  left: 700px;
  top: 4455px;
  */
`;

Content.Text = styled.div`
  width: 566px;
  height: 96px;
  margin-top: 45px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  /* or 24px */

  text-align: center;
  letter-spacing: 0.005em;

  /* Light/Text Color/Body 1 */

  color: #515151;
`;

Content.UserName = styled.div`
  height: 29px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height, or 29px */

  margin-top: 32px;
  text-align: center;
  letter-spacing: 0.005em;
`;

Content.Profession = styled.div`
  width: 88px;
  height: 20px;
  margin-top: 8px;

  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 20px */

  text-align: center;
  letter-spacing: 0.005em;

  /* Light/Text Color/Body 1 */

  color: #515151;
`;

export const IconContainer = styled.div`
  /* margin-right: 100%; */
  margin-top: -160px;
  margin-left: -55px;
`;

export const IconLeft = styled(Left)`
  /* margin-left: 105%;
  margin-top: -150px; */
`;
export const IconRight = styled(Right)`
  margin-left: 105%;
  margin-top: -38px;
`;
