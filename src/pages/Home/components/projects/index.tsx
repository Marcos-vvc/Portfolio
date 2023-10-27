import {
  Card,
  ContainerMain,
  Content,
  Project,
  ProjectInfo,
  Tag,
} from './styles'
import GitBlog from '../../../../assets/github.png'
import Coffee from '../../../../assets/coffe.png'
import { Link } from 'react-router-dom'
import { HiArrowNarrowRight } from 'react-icons/hi'

export function Projects() {
  return (
    <ContainerMain>
      <span>../competências</span>
      <h2>Projetos em destaque</h2>
      <Content>
        <Project>
          <Card>
            <img src={GitBlog} alt="GitHub Blog" />
            <div className="content">
              <h3 className="title">GitHub-Blog</h3>
              <p className="sub-title">Aplicação Web</p>
            </div>
          </Card>
          <ProjectInfo>
            <h3>GitHub-Blog</h3>

            <p>
              Durante este desafio, desenvolvemos uma aplicação que utiliza a
              API do GitHub para buscar issues de um repositório, dados do
              perfil e exibir elas como um blog.
            </p>

            <Tag>
              <span>React</span>
              <span>Typescript</span>
              <span>Axios</span>
              <span>Hooks</span>
              <span>Date-fns</span>
              <span>Styled-Component</span>
            </Tag>

            <Link to="https://github.com/Marcos-vvc/GitHub-Blog" target="blank">
              Ver projeto
              <HiArrowNarrowRight size={20} />
            </Link>
          </ProjectInfo>
        </Project>
      </Content>
      <Content>
        <Project>
          <Card>
            {/* <img src={Coffee} alt="Coffee-Delivery" /> */}
            <img src="https://user-images.githubusercontent.com/71772559/178171983-f724d1a7-deb4-4d13-aa92-09e1cac4ec36.png" />
            <div className="content">
              <h3 className="title">Coffee-Delivery</h3>
              <p className="sub-title">Aplicação Web</p>
            </div>
          </Card>

          <ProjectInfo>
            <h3>Coffee Delivery</h3>

            <p>
              Coffee Delivery é uma página web de catálogo e compra de cafés.
              Esse projeto é um dos desafios da trilha de React do Ignite,
              bootcamp completo de especialização em React, React Native e
              Node.js. Projeto foi proposto como desafio, sendo assim
              disponibilizado somente o layout(figma) para desenvolvimento.
            </p>

            <Tag>
              <span>React</span>
              <span>Axios</span>
              <span>Context</span>
              <span>Typescript</span>
              <span>Styled-Component</span>
            </Tag>

            <Link to="https://github.com/Marcos-vvc/GitHub-Blog" target="blank">
              Ver projeto
              <HiArrowNarrowRight size={20} />
            </Link>
          </ProjectInfo>
        </Project>
      </Content>
      Se interessou?
      <Link to="https://github.com/Marcos-vvc/GitHub-Blog" target="blank">
        Ver todos
        <HiArrowNarrowRight size={18} />
      </Link>
    </ContainerMain>
  )
}
