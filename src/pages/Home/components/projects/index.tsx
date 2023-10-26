import { ContainerMain, Content, Project, ProjectInfo, Tag } from './styles'
import GitBlog from '../../../../assets/github.png'
import Coffee from '../../../../assets/cafe.png'
import { Link } from 'react-router-dom'
import { HiArrowNarrowRight } from 'react-icons/hi'

export function Projects() {
  return (
    <ContainerMain>
      <span>../competências</span>
      <h2>Projetos em destaque</h2>
      <Content>
        <Project>
          <img src={GitBlog} alt="GitHub Blog" />
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
              <span>Styled-Component</span>
              <span>Axios</span>
              <span>Date-fns</span>
              <span>Hooks</span>
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
          <img src={Coffee} alt="" />

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
