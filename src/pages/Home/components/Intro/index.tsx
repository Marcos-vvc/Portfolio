import {
  IntroContainer,
  MyContent,
  LogoReact,
  Name,
  SubTitle,
  Title,
} from './styles'
import iPhoto from '../../../../assets/Eu.png'
import node from '../../../../assets/nodejs.svg'
import react from '../../../../assets/react.svg'
import typescript from '../../../../assets/typescript.svg'
import { motion } from 'framer-motion'

export function Intro() {
  return (
    <div className="container">
      <IntroContainer>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >
          <MyContent>
            <Title>Olá, eu sou o</Title>
            <Name>Marcos Vinicius</Name>
            <SubTitle>Fullstack Developer</SubTitle>

            <div className="section">
              <span className="numeroEspecial">
                1.6<span>anos de experiência</span>
              </span>

              <span className="numeroEspecial">
                10<span>projetos completos</span>
              </span>
            </div>
          </MyContent>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.9 }}
        >
          <LogoReact>
            <img src={react} alt="react" />
            <img src={iPhoto} alt="" />
            <img src={node} alt="" />
            <img src={typescript} alt="" />
          </LogoReact>
        </motion.div>
      </IntroContainer>
    </div>
  )
}
