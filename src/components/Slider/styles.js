import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;

  > h2 {
    margin-top: 50px;
    margin-bottom: 23px;
  }

 .swiper-wrapper {
  display: flex;
  gap: 15px;

  width: fit-content !important;
 }

 .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: fit-content !important;
 }

 @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
 
  padding: 5px;
  
    > h2 {
      margin-top: 50px;
      margin-bottom: 23px;
    }
 }
`
