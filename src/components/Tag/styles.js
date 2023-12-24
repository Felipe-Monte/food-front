import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 35px;
  width: 150px;
  
  background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.GRAY_600};
  color: ${({theme}) => theme.COLORS.GRAY_600};
  border: ${({theme, $isNew}) => $isNew ? `1px dashed ${theme.COLORS.GRAY_600}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > input {
    height: 35px;
    width: 100%;
  
    padding: 12px;

    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_600};
    }
  }

  > button {
    display: flex;
    color: ${({theme}) => theme.COLORS.WHITE};

    border: none;
    background: none;
  }
`
