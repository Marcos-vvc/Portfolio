import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'
import { ContactForm } from '../../components/Contact-form'
import { Footer } from '../../components/Footer'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
      <ContactForm />
      <Footer />
    </LayoutContainer>
  )
}
