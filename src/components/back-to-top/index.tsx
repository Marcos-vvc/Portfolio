import { useCallback, useEffect, useState } from 'react'
import { TbArrowNarrowUp } from 'react-icons/tb'
import { ButtonContainer } from './styles'

export const BackToTop = () => {
  const [show, setShow] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true)
    if (show && window.scrollY <= 500) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <ButtonContainer>
      <button onClick={scrollToTop}>
        <TbArrowNarrowUp size={20} />
      </button>
    </ButtonContainer>
  )
}
