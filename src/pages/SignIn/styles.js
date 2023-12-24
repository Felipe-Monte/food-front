import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%;
 
  text-align: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    gap: 5%;
  }
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  padding: 64px;
  border-radius: 7px;

  min-width: 476px;
  
  display: flex;
  flex-direction: column;
  gap: 10px;

  > h1 {
    font-size: 30px;
    margin-bottom: 10px;
  }

  > a {
    font-size: 16px;
    margin-top: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }

  > label {
    margin-top: 22px;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  
  > button {
    margin-top: 22px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    min-width:100%;
    padding: 0px 47px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_900};

    > h1 {
      display: none;
    }
  }
`;
