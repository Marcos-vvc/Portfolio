import styled from 'styled-components'

export const ContainerMain = styled.main`
  padding: 4rem;
  line-height: 1.6;

  > span {
    font-family: 'IBM Plex Mono';
    color: ${(props) => props.theme['blue-normal']};
  }

  h2 {
    font-size: 2rem;
    margin-top: 1rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid gray;

    opacity: 0.9;
    background: linear-gradient(
      180deg,
      rgba(249, 250, 251, 1) 0%,
      rgba(209, 213, 219, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  a {
    display: inline-flex;
    align-items: center;
    margin-top: 2rem;
    margin-left: 0.5rem;
    gap: 0.5rem;
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
  flex-direction: row;
  margin-top: 2rem;
  border-bottom: 1px solid gray;
  padding-bottom: 4rem;
`
export const Project = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-top: 4rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Card = styled.div`
  max-width: 26.25rem;
  height: 19rem;
  width: 100%;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  border: none;

  a {
    display: flex;
    text-decoration: none;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .content {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    position: absolute;
    opacity: 0;
    backdrop-filter: blur(5px);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
  }

  &:hover .content {
    border: 2px solid ${(props) => props.theme['blue-normal']};
    opacity: 1;
  }

  .title {
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-50']};
  }

  .sub-title {
    text-transform: capitalize;
    color: ${(props) => props.theme['gray-400']};
  }

  @media (max-width: 1024px) {
    min-width: 26rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;

    img {
      width: 100%;
    }
  }
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  p {
    color: ${(props) => props.theme['gray-400']};
  }

  h3 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-50']};
  }

  span {
    line-height: 1.25rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
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

  @media (max-width: 768px) {
    flex-wrap: nowrap;
  }
`

export const Tag = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: 20.25rem;
  width: 100%;

  span {
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
    color: ${(props) => props.theme['blue-normal']};
    background: ${(props) => props.theme['blue-bg']};
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
  }
`
