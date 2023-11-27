import { motion } from 'framer-motion'
import minhaLogo from '../../assets/logo.png'
import { BgGround, HeaderContainer } from './styles'
import { Intro } from '../../pages/Home/components/Intro'
import { HiOutlineMail } from 'react-icons/hi'

export function Header() {
  return (
    <BgGround>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.9 }}
      >
        <HeaderContainer>
          <img src={minhaLogo} alt="eu" />

          <header>
            <a href="#Contact">
              <button>Contato</button>
            </a>
            <HiOutlineMail />
          </header>
        </HeaderContainer>
      </motion.div>
      <Intro />
    </BgGround>
  )
}
