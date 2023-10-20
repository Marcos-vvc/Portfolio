import { IoMdHeart } from 'react-icons/io'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <span>Made with</span>
      <IoMdHeart size={13} color="#3294F8" />
      by
      <strong>Marcos Vinicius</strong>
    </FooterContainer>
  )
}
