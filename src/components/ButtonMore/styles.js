import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 46px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 0 16px;  

  text-align: center;

  > span {
    font-size: 20px;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    > svg {
      width: 24px;
      height: 24px;
    }
  }
`