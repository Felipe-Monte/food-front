import { Container } from './styles';

export function InputImg({ icon: Icon, onFileChange, ...rest }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileChange(file);
    }
  };

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input type="file" accept="image/*" onChange={handleFileChange} {...rest} />
    </Container>
  );
}
