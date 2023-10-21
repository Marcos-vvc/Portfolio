import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/experience'
import { Projects } from './components/projects'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <About />
      <Skills />
      <Projects />
      <Experience />
    </HomeContainer>
  )
}
