import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  > main {
    width: 100%;
    height: fit-content;

    padding: 164px 124px 50px 124px;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding: 0px;
      
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 260px;

  display: flex;
  gap: 50%;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  
  
  .container-img {
    position: relative;

    height: 100%;
   
    > img {
      position: absolute;
      bottom: 0;
    }
  }

  .container-text{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h2 {
      font-size: 46px;
    }

    > p {
      font-size: 16px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin: 10px auto;
    width: 90%;
    height: 100px;
    gap: 53%;

    .container-img {
      position: relative;
    
      height: 100%;
    
      > img {
        width: 120px;
        height: 105px;
      }
    }

    .container-text {
      > h2 {
        font-size: 18px;
      }

      > p {
        font-size: 10px;
      }
    }
    
  }
`