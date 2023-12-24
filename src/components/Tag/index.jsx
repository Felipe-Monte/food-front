import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

export function Tag({ isNew, title, onClick, ...rest }) {
  return (
    <Container $isNew={isNew} {...rest}>
      <input
        type="text"
        value={title}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type='button'
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}