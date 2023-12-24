import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.footer`
  width: 100%;
  height: 77px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: flex-end;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    

    > p {
      font-size: 9px;
    }
  }
`