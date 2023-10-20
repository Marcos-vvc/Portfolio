import { ContainerMain, Content, Project, ProjectInfo, Tag } from './styles'
import Fundo from '../../../../assets/Fundo.png'
import { Link } from 'react-router-dom'
import { HiArrowNarrowRight } from 'react-icons/hi'

export function Projects() {
  return (
    <ContainerMain>
      <span>../competências</span>
      <h2>Projetos em destaque</h2>
      <Content>
        <Project>
          <img src={Fundo} alt="" />

          <ProjectInfo>
            <h3>Blog-Git</h3>

            <p>
              Este projeto foi desenvolvido durante o bootcamp Ignite da
              Rocketseat. O projeto permite ao usuário criar uma conta e receber
              agendamentos no calendário usando a API do Google, um projeto
              semelhante ao Calendly.
            </p>

            <Tag>
              <span>React</span>
              <span>Typescript</span>
              <span>Styled-Component</span>
              <span>Axios</span>
              <span>Date-fns</span>
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
          <img src={Fundo} alt="" />

          <ProjectInfo>
            <h3>Blog-Git</h3>

            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
              sobreviveu não só a cinco séculos, como também ao salto para a
              editoração eletrônica, permanecendo essencialmente inalterado.
            </p>

            <Tag>
              <span>React</span>
              <span>Axios</span>
              <span>Date-fns</span>
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
