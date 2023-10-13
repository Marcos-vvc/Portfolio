import { motion } from 'framer-motion'
import minhaLogo from '../../assets/logo.png'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.9 }}
        // initial={{ top: -100 }}
        // animate={{ top: 0 }}
        // transition={{ duration: 0.5 }}
      >
        <HeaderContainer>
          <img src={minhaLogo} alt="eu" />

          <header>
            <span>Home</span>
            <span>Sobre</span>
            <span>Habilidades</span>
            <span>Projetos</span>
            <span>Contato</span>
          </header>
        </HeaderContainer>
      </motion.div>
    </div>
  )
}
