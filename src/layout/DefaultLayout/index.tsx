import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'
import { ContactForm } from '../../components/Contact-form'
import { Footer } from '../../components/Footer'
import { BackToTop } from '../../components/back-to-top'
import { Toaster } from 'react-hot-toast'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
      <ContactForm />
      <BackToTop />
      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
    </LayoutContainer>
  )
}
