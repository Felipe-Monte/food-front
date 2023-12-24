import { Container } from './styles'

import { FiMinus, FiPlus } from 'react-icons/fi'

export function ButtonMore() {
  return (
    <Container>
      <button>{<FiMinus />}</button>
      <span>01</span>
      <button>{<FiPlus />}</button>
    </Container>
  )
}