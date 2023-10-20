import styled from 'styled-components'

export const ContainerMain = styled.main`
  padding: 4rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      /* width: 40rem; */
    }
  }

  h2 {
    font-size: 2rem;
    border-bottom: 1px solid gray;
    padding-bottom: 2rem;
    color: ${(props) => props.theme['blue-normal']};
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
  flex-direction: column;
  margin-top: 2rem;
  border-bottom: 1px solid gray;
  padding-bottom: 4rem;
`
export const Project = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 4rem;

  img {
    border-radius: 0.5rem;
    width: 26.25rem;
    height: 19rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      /* width: 40rem; */
    }
  }
`
export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.5rem;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme['blue-normal']};
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
`

export const Tag = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.75rem;
  width: 20.25rem;
  /* height: 68px; */

  span {
    color: ${(props) => props.theme['blue-normal']};

    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
    background: rgb(75 85 99);
  }
`
