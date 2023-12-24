import { Container } from './styles';

export function InputCategory({ icon: Icon, options, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <select {...rest}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
}
