import { ContainerSkills, ContainerMain, Content, Title } from './styles'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { SiNestjs } from 'react-icons/si'
import {
  TbBrandNextjs,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandReactNative,
  TbBrandNodejs,
} from 'react-icons/tb'

export function Skills() {
  return (
    <ContainerMain>
      <span>../competências</span>
      <Title>Conhecimentos</Title>
      <Content>
        <ContainerSkills>
          <div className="Card">
            <div className="CardInside">
              <span>HTML</span>
              <AiOutlineHtml5 />
            </div>
            <span>2 anos de experiência</span>
          </div>

          <div className="Card">
            <div className="CardInside">
              <p>CSS</p>
              <TbBrandCss3 />
            </div>
            <span>2 anos de experiência</span>
          </div>
          <div className="Card">
            <div className="CardInside">
              <p>JavaScript</p>
              <TbBrandJavascript />
            </div>
            <span>2 anos de experiência</span>
          </div>
          <div className="Card">
            <div className="CardInside">
              <p>TypeScript</p>
              <TbBrandTypescript />
            </div>
            <span>2 anos de experiência</span>
          </div>
          <div className="Card">
            <div className="CardInside">
              <p>React</p>
              <TbBrandReactNative />
            </div>
            <span>2 anos de experiência</span>
          </div>
          <div className="Card">
            <div className="CardInside">
              <p>Node.js</p>
              <TbBrandNodejs />
            </div>
            <span>2 anos de experiência</span>
          </div>
          <div className="Card">
            <div className="CardInside">
              <p>Next.js</p>
              <TbBrandNextjs />
            </div>
            <span>2 anos de experiência</span>
          </div>
          <div className="Card">
            <div className="CardInside">
              <p>Nest.js</p>
              <SiNestjs />
            </div>
            <span>2 anos de experiência</span>
          </div>
        </ContainerSkills>
      </Content>
    </ContainerMain>
  )
}
