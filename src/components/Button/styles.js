import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BRAND_500};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
  
  height: 46px;
  border: 0;
  padding: 0 16px;  
  border-radius: 7px;
  font-weight: 700;

  text-align: center;
  white-space: nowrap;

  &:disabled {
    opacity: .5;
  }

  @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
    height: 40px;
  }
`;