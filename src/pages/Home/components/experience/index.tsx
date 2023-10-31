import { titlesAnimation } from '../../../../lib/animations'
import { Content, XpContainer } from './styles'
import { WorkCard } from './works-card'
import { motion } from 'framer-motion'

export function Experience() {
  return (
    <XpContainer>
      <Content>
        <span>../experiências</span>
        <motion.h1
          {...titlesAnimation}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experiência Profissional
        </motion.h1>
        <p>
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incríveis para sua empresa!
        </p>
      </Content>
      <WorkCard />
    </XpContainer>
  )
}
