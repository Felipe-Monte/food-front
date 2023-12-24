import { Container } from './styles'

export function TitleLogo({ text, urlImg, imgSize, textSize }) {
  const imageStyle = {
    width: imgSize || "50px",
    height: "auto"
  }

  const textStyle = {
    fontSize: textSize || "42px"
  }

  return (
    <Container>
      <div className='container-logo'>
        <img src={urlImg} alt="icone hexágono" style={imageStyle} />
      </div>
      <div>
        <h2 style={textStyle}>{text}</h2>
      </div>  
    </Container>
  )
}