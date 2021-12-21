import styled from 'styled-components';
export const ChairWrapper = styled.div`
  width: 98px;
  height: 92px;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 8px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.56) 100%
  );
  border: 2px solid #ffffff;
  box-sizing: border-box;
`;

ChairWrapper.ImgWrap = styled.div`
  width: 79px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

ChairWrapper.Cost = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #7ac751;
  line-height: 26px;
  position: absolute;
  top: 52px;
`;
ChairWrapper.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  color: #555555;
  padding-top: 19px;
`;

export const Sofa = styled.div`
  width: 374px;
  height: 374px;
`;

export const Wrap = styled.div`
  width: 899px;
  height: 439px;
  background: linear-gradient(
    103.4deg,
    rgba(241, 250, 255, 0.88) 0.89%,
    #f1faff 101.61%
  );
  backdrop-filter: blur(155px);
  margin: 12px 11px;
`;
Wrap.Container = styled.div`
  display: flex;
  margin: 36px 39px 29px 47px;
`;
Wrap.ContainerWrap = styled.div`
  display: ${({ column }) => column && 'flex'};
  flex-direction: ${({ column }) => column && 'column'};
  justify-content: ${({ column }) => column && ' space-between'};
  padding: ${({ column }) => column && '22px 0 30px 0'}; ;
`;

Wrap.Top = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.05em;
  color: #7ac751;
  padding: 37px 0 0 0;
  display: inline-block;
`;
Wrap.Title = styled.div`
  width: 318px;
  height: 94px;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 47px;
  color: #2f2f2f;
`;
Wrap.Products = styled.div`
  margin-top: 29px;
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 26px;
  color: rgba(81, 81, 81, 0.71);
`;

Wrap.Btn = styled.button`
  background: #7ac751;
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  margin-top: 35px;
  padding: 10px 18px;
  border: none;
`;
