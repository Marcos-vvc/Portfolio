import uber from '../../../../../assets/uber.png'
import { WorkContainer, Content, Imag, Uber } from './styles'

export function WorkCard() {
  return (
    <WorkContainer>
      <Content>
        <Imag>
          <img src={uber} alt="uber" />
        </Imag>

        <div className="line"></div>

        <Uber>
          <h4>@Uber</h4>
          <span> Oct 2022 • (4 anos) </span>
          <p>
            Trabalhei durante 4 anos e 5 meses como motorista de aplicativo. Foi
            uma experiência em tanto, a convivência diariamente com diversos
            tipos de pessoas me fez ter mais empatia pelo próximo.
          </p>
        </Uber>
      </Content>
    </WorkContainer>
  )
}
