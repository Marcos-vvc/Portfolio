import { AboutContainer, Content, ContainerIcons, ReactIcons } from './styles'
import me from '../../../../assets/hihe.png'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { PiLinkedinLogo } from 'react-icons/pi'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

export function About() {
  return (
    <AboutContainer>
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 200, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <img src={me} alt="Minha foto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.7 }}
      >
        <Content>
          <span>Sobre mim ( ) </span>
          <p>
            Olá! Meu nome é <strong>Marcos Vinicius</strong>, sou formado em
            Técnico em Secretariado pela Faculdade Processus de Brasília e, além
            disso, tenho formação em Desenvolvimento Full-Stack pelo bootcamp da
            Labenu. Possuo grande experiência na área administrativa, tendo
            trabalhado em algumas empresas, sempre buscando agregar valor aos
            projetos em que participo.
          </p>

          <ContainerIcons>
            <a href="#Contact">
              <button>
                Contrate - me
                <HiArrowNarrowRight size={18} />
              </button>
            </a>
            <ReactIcons>
              <a
                href="https://github.com/Marcos-vvc"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub size={25} />
              </a>

              <a
                href="https://www.linkedin.com/in/marcos-vinicius-080659117/"
                target="_blank"
                rel="noreferrer"
              >
                <PiLinkedinLogo size={25} />
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=5561982743366"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={25} />
              </a>
            </ReactIcons>
          </ContainerIcons>
        </Content>
      </motion.div>
    </AboutContainer>
  )
}
