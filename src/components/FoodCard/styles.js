import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

import { Link } from 'react-router-dom'

export const Content = styled(Link)`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    width: 100%;
  
  > h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }

  > p {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
  }

  > span {
    display: block;
    width: 100%;

    text-align: center;
    font-size: 32px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.BRAND_600};
  }

  @media (max-width:${DEVICE_BREAKPOINTS.MD}) {

    > h1 {
      font-size: 14px;
    }

    > p {
      display: none;
    }

    > span {
      font-size: 16px;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  
  width: 304px;
  height: 462px;

  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  position: relative;

  @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
    
    width: 210px;
    height: 292px;
  }
`

export const Edit = styled(Link)`

> svg {
    width: 30px;
    height: 30px;

    position: absolute;
    top: 15px;
    right: 15px;
  }

  @media (max-width:${DEVICE_BREAKPOINTS.MD}) {

    > svg {
      width: 20px;
      height: 20px;
    }
  }
`

export const FoodImg = styled.div`
  width: 176px;
  height: 176px;

  border-radius: 50%;

  > img {
      width: 100%;
      height: 100%;

      background-size: cover;
      object-fit: cover;
      border-radius: 50%; 
    }

  @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
    width: 88px;
    height: 88px;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  gap: 15px;

  width: 100%;

  @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    gap: 0;
    
  }
`
