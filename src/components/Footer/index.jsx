import { Container } from './styles'

import { TitleLogo } from '../TitleLogo'

import imgLogo from '../../assets/polygon-gray.svg'

export function Footer() {
  return (
    <Container>
      <TitleLogo
        text="Food explorer"
        urlImg={imgLogo}
        imgSize={30}
        textSize={28}
      />

      <p>© 2023 - Todos os direitos reservados.</p>

    </Container>
  )
}