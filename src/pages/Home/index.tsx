import { About } from './components/About'
import { Intro } from './components/Intro'
import { Skills } from './components/Skills'
import { Projects } from './components/projects'

export function Home() {
  return (
    <div className="container">
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
