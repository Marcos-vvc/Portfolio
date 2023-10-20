import { ContactForm } from '../../components/Contact-form'
// import { Footer } from '../../components/Footer'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/experience'
import { Projects } from './components/projects'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <div className="container">
        <About />
        <Skills />
        <Projects />
        <Experience />
      </div>
      <ContactForm />
    </HomeContainer>
  )
}
