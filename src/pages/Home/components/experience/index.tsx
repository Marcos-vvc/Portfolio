import { XpContainer } from './styles'
import { WorkCard } from './works-card'

export function Experience() {
  return (
    <XpContainer>
      <section>
        <span>../experiências</span>
        <h1>Experiência Profissional</h1>
        <p>
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incríveis para sua empresa!
        </p>
      </section>

      <div>
        <WorkCard />
      </div>
    </XpContainer>
  )
}
