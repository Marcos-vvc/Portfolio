import { motion } from 'framer-motion'
import minhaLogo from '../../assets/logo.png'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <motion.div
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <HeaderContainer>
          <img src={minhaLogo} alt="eu" />

          <header>
            <span>Home</span>
            <span>About</span>
            <span>Skills</span>
            <span>Projects</span>
            <span>Contact</span>
          </header>
        </HeaderContainer>
      </div>
    </motion.div>
  )
}
