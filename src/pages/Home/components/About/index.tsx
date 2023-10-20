import { AboutContainer, Content } from './styles'
import me from '../../../../assets/hihe.png'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { PiLinkedinLogo } from 'react-icons/pi'
import { HiArrowNarrowRight } from 'react-icons/hi'

export function About() {
  return (
    <div className="container">
      <AboutContainer>
        <img src={me} alt="Minha foto" />

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

          <div className="ContainerIcons">
            <button>
              Contrate - me
              <HiArrowNarrowRight size={18} />
            </button>
            <div className="react-icons">
              <FiGithub size={25} />
              <PiLinkedinLogo size={25} />
              <FaWhatsapp size={25} />
            </div>
          </div>
        </Content>
      </AboutContainer>
    </div>
  )
}
