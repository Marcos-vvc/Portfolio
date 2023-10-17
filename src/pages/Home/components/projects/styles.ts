import styled from 'styled-components'

export const ContainerMain = styled.main`
  padding: 4rem;

  h2 {
    font-size: 2rem;
    border-bottom: 1px solid gray;
    padding-bottom: 32px;
    color: ${(props) => props.theme['blue-normal']};
  }

  a {
    display: inline-flex;
    align-items: center;
    margin-top: 32px;
    margin-left: 8px;
    gap: 8px;
    text-decoration: none;
    transition: 0.2s;
    color: ${(props) => props.theme['gray-300']};

    &:hover {
      color: ${(props) => props.theme['blue-normal']};
    }
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  border-bottom: 1px solid gray;
  padding-bottom: 64px;
`
export const Project = styled.div`
  display: flex;
  gap: 48px;
  margin-top: 64px;

  img {
    border-radius: 0.5rem;
    width: 420px;
    height: 304px;
  }
`
export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* background: gray; */

  gap: 24px;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme['blue-normal']};
  }

  span {
    line-height: 20px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border: none;
    background: none;
    text-decoration: none;
    transition: 0.2s;
    color: ${(props) => props.theme['gray-300']};

    &:hover {
      color: ${(props) => props.theme['blue-normal']};
    }
  }
`

export const Tag = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;
  width: 324px;
  /* height: 68px; */

  span {
    color: ${(props) => props.theme['blue-normal']};

    padding: 4px 12px;
    border-radius: 8px;
    background: rgb(75 85 99);
  }
`
