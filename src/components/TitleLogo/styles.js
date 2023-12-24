import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  display: flex;
  gap: 20px;

  h2 {
    text-align: center;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 10px;
    margin-left: 10%;

    .container-logo {
      display: flex;
      align-items:center;
      justify-content: center;
      

      > img {
        width: 25px !important;
        height: 25px !important; 
      }
    }
    h2 {
      font-size: 16px !important;
      line-height: 30px;
      white-space: nowrap;
    }  
  }
`

