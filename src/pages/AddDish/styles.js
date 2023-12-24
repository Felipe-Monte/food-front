import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;


  > main {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
  }
`

export const Form = styled.form`
  min-width: 950px;
  max-width: 950px;
  height: fit-content;

  margin-top: 10px;
 
  /* border: 2px solid white; */

  > a {
    width: fit-content;

    font-size: 24px;
    font-style: normal;
    font-weight: 700;

    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;

    margin-top: 10px;
    margin-bottom: 32px;
  }
`

export const ContainerInputs = styled.div`
  width: 100%;

  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  /* border: 2px solid green; */

  .image{
    flex: 25%;
  }
  .name{
    flex: 50%;
  }
  .category{
    flex: 25%;
  }
`

export const ContainerTagsAndPrice = styled.div`
  width: 100%;

  display: flex;
  gap: 32px;

  .container-tags{
    display: flex;
    align-items: center;
    gap: 15px;

    height: 100%;
    width: 100%;

    /* padding: 12px; */
    padding-left: 7px;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: 0;
    border-radius: 5px;

  }

  .price{
    flex: 30%;
  }

`

export const WrapperTextArea = styled.div`
  width: 100%;

  > label {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  > textarea {
    width: 100%;
    height: 172px;

    margin-top: 16px;
    padding: 15px;

    resize: none;

    border: none;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

`

export const ContainerButton = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  margin-top: 32px;

  /* border: 2px solid white; */

  > button {
    width: 172px;
  }
`

export const WrapperInput = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-bottom: 32px;

  > label {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;

    margin-bottom: 16px;
  }
`