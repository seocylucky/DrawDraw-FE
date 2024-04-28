import styled from 'styled-components';

export const StyledModalTextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 27px;
  align-items: center;
  z-index: 9999;
`;

export const StyledTitleText = styled.div`
  font-family: SSMullaeler;
  z-index: 9999;
  color: #511f05;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: 78.766px;
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;

export const StyledBtn = styled.img`
  width: 110px;
  cursor: pointer;
`;
