import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.nav`
  width: 100%;
  height: 104px;

  padding: 24px 123px;

  display: flex;  
  align-items: center;
  justify-content: center;
  gap: 50px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  .icon-menu {
    display: none;
    width: 30px;
    height: 30px;
  }

  .icon-pedido {
    display: none;  
    width: 30px;
    height: 30px;
  }

  
  > button {  
      width: 216px;

      /* background-color: transparent; */
      border: none;
    }

    .add_button {  
      width: 50px;
      font-size: 20px;
      /* background-color: transparent; */
      border: none;
    }

  svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    gap: 0px;

    .icon-menu {
      display: block;  
    }

    .icon-pedido {
      display: block;  
    }
    
    > button {  
      display: none;
    }

    .add_button {  
      display: none;
    }

    .icon-logout {
      display: none;
    }
      
    }
`;

export const Search = styled.div`
  width: 40%;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`